#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// type definitions
typedef enum
{
    TYPE_STRING,
    TYPE_NUMBER,
    TYPE_OBJECT,
    TYPE_UNDEFINED,
    TYPE_BOOLEAN,
    TYPE_FUNCTION,
    TYPE_ARRAY,
} JSValueType;

// JSvalue structure definitions
typedef struct
{
    JSValueType type;
    union
    {
        char *stringValue;
        double numberValue;
        struct JSobject *objectValue;
        struct JSarray *arrayValue;
        void (*functionValue)();
        int booleanValue;
    };
} JSvalue;

// JSproperty structure
typedef struct
{
    char *key;
    JSvalue value;
} JSproperty;

// JSobject structure with HiddenClass
typedef struct
{
    char **keys;
    int *offsets;
    int keycount;
} HiddenClass;

// JSobject structure
typedef struct JSobject
{
    JSproperty *properties;
    size_t propertyCount;
    struct JSobject *prototype;
    HiddenClass *hiddenClass;
} JSobject;

// functions
JSobject *createObject();
JSobject *createObjectPrototype();
JSvalue *getProperty(JSobject *obj, char *key);
void addProperty(JSobject *obj, char *key, JSvalue value);
void execution(JSobject *obj, char *key);
void greet();
void freeObject(JSobject *obj);

int main()
{
    JSobject *objPrototype = createObjectPrototype();
    JSobject *person = createObject();
    JSvalue value;
    // name
    value.type = TYPE_STRING;
    value.stringValue = "Alice";
    addProperty(person, "name", value);
    // age
    value.type = TYPE_NUMBER;
    value.numberValue = 25;
    addProperty(person, "age", value);
    // isStudent
    value.type = TYPE_BOOLEAN;
    value.booleanValue = 0;
    addProperty(person, "isStudent", value);
    // greet
    value.type = TYPE_FUNCTION;
    value.functionValue = greet;
    addProperty(person, "greet", value);
    person->prototype = objPrototype;
    execution(person, "name");
    execution(person, "age");
    execution(person, "greet");
    freeObject(person);
    freeObject(objPrototype);
    return 0;
}

JSobject *createObject()
{

    JSobject *obj = malloc(sizeof(JSobject));
    obj->properties = NULL;
    obj->propertyCount = 0;

    obj->hiddenClass = malloc(sizeof(HiddenClass));
    obj->hiddenClass->keys = NULL;
    obj->hiddenClass->offsets = NULL;
    obj->hiddenClass->keycount = 0;

    return obj;
}

JSobject *createObjectPrototype()
{

    JSobject *obj = createObject();
    obj->prototype = NULL;

    return obj;
}

JSvalue *getProperty(JSobject *obj, char *key)
{

    for (int i = 0; i < obj->hiddenClass->keycount; i++)
    {
        if (strcmp(obj->hiddenClass->keys[i], key) == 0)
        {
            return &obj->properties[obj->hiddenClass->offsets[i]].value;
        }
    }
    if (obj->prototype)
    {
        return getProperty(obj->prototype, key);
    }
    return NULL;
}

void addProperty(JSobject *obj, char *key, JSvalue value)
{

    int index = obj->propertyCount;
    obj->propertyCount++;
    obj->properties = realloc(obj->properties, sizeof(JSproperty) * obj->propertyCount);
    obj->properties[index].key = strdup(key);
    obj->properties[index].value = value;

    obj->hiddenClass->keys = realloc(obj->hiddenClass->keys, sizeof(char *) * obj->propertyCount);
    obj->hiddenClass->offsets = realloc(obj->hiddenClass->offsets, sizeof(int) * obj->propertyCount);

    obj->hiddenClass->keycount = obj->propertyCount;
    obj->hiddenClass->keys[index] = strdup(key);
    obj->hiddenClass->offsets[index] = index;
}

void greet()
{
    printf("Hello, World!\n");
}

void execution(JSobject *obj, char *key)
{
    JSvalue *value = getProperty(obj, key);
    if (value == NULL)
    {
        return;
    }

    switch (value->type)
    {
    case TYPE_STRING:
        printf("%s\n", value->stringValue);
        break;
    case TYPE_NUMBER:
        printf("%f\n", value->numberValue);
        break;
    case TYPE_FUNCTION:
        value->functionValue();
        break;
    default:
        printf("Undefined property\n");
    }
}

void freeObject(JSobject *obj)
{
    for (size_t i = 0; i < obj->propertyCount; i++)
    {
        free(obj->properties[i].key);
    }
    free(obj->properties);
    for (size_t i = 0; i < obj->hiddenClass->keycount; i++)
    {
        free(obj->hiddenClass->keys[i]);
    }
    free(obj->hiddenClass->keys);
    free(obj->hiddenClass->offsets);
    free(obj->hiddenClass);
    free(obj);
}

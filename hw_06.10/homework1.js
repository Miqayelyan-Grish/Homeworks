// forEach function implementation:

function forEach(arr, fn)
{
    const len = arr.length;
    for (let i = 0; i < len; i++)
    {
        foo(arr[i]);
}
return;
}

function foo(value)
{
    console.log(value * value);
}

const arr = [1, 2, 3, 4, 5];

forEach(arr, foo);

// arr.forEach(function(val)
// {
// console.log(val * val);
// }
// )

// function - reverse a string without using built-in methods:

function revStr(str)
{
    let newstr = '' 

    let size = str.length

    for(let i = size - 1; i >= 0; i--)
    {
        newstr += str[i]
    }
    return newstr
}

let str = 'hello'

console.log(revStr(str))
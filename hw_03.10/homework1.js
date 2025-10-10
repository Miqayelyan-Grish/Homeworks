// function - number of characters in a string:

function numOfCharacters(str) 
{
    let count = 0
    
    for (let i = 0; i < str.length; i++)
    {
        count++
    }
    return count
}

let str = 'hello world'

console.log(numOfCharacters(str))
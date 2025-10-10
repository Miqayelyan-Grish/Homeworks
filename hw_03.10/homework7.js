// function - searching the index of the number in the array: 

function functionIndexOfNumber(arr, num)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === num)
        {
           return i 
        }
    }
}
let arr = [1, 2, 3, 4, 5];

let num = 4;

console.log(functionIndexOfNumber(arr, num));
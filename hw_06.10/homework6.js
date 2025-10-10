// indexOf function implementation:

function indexOf(arr, value, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {

        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(indexOf(arr, 5, 4));
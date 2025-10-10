// some function implementation:

function some(arr, fn) {

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return true;
        }
    }
    return false;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result_some = some(arr, function callbackFn(element, index, arr) {

        return element > 9;
})

console.log(result_some);
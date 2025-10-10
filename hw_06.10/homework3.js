// filter function implementation: 

function filter(arr, fn) {

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result_filter = filter(arr, function callbackFn(element, index, arr) {

        return element % 2 === 0;
})

console.log(result_filter);
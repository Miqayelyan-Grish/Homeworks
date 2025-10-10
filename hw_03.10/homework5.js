// funtion - two arrays merge:

function mergeArr(arr1, arr2) {

    for (let i = 0; i < arr2.length; i++) {

        arr1[arr1.length] += arr2[i]
    }
    return arr1
}

let arr1 = [1, 2]

let arr2 = [3, 4]

console.log(mergeArr(arr1, arr2))
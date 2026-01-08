function merge_2_arrays(arr1, arr2) {
    let merged_arr = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] < arr2[j]) {
            merged_arr.push(arr1[i]);
            i++;
        }
        else {
            merged_arr.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        merged_arr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged_arr.push(arr2[j]);
        j++;
    }
    return merged_arr;
}


let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 9];

let result = merge_2_arrays(arr1, arr2);

console.log(result);
// every function implementation:

function every(arr, fn){
  
    for(let i = 0; i < arr.length; i++){
        if(!fn(arr[i])){
            return false;
        }
    }
    return true;
}

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const result_every = every(arr, function callbackFn(element, index, arr) {

        return element < 11;
});

console.log(result_every);
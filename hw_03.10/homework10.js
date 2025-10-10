// function to figure out if a number is happy or not:

function digitSquare(digit) {
    return digit * digit;
}

function isHappyNumber(num) {
    //let newset = new Set(); 
  
    let arr = [];
    
    let sum = 0;

    do {
        sum = 0;
    
        while(num > 0){

        let digit = num % 10;
        sum += digitSquare(digit);
        num = (num - digit) / 10;
        
    }
    for(let i = 0; i < arr.length; i++){
        
        if (arr[i] === sum) {
    
            return false;        
        }
    }
    arr[arr.length] = sum;

    // newset.add(arr[i])

    num = sum;

    } while (num !== 1)

    return true;
}

console.log(isHappyNumber(19));


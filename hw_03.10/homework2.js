// function - to uppercase funtion implementation:

function toUpperCase(str) {
    
    let upperStr = ''

    let size = str.length

    for (let i = 0; i < size; i++) {

        if (str[i] >= 'a' && str[i] <= 'z') {
            
            upperStr += String.fromCharCode(str.charCodeAt(i) - 32)
        }
        else {
            upperStr += str[i]
        }
    }
    return upperStr
}

let str = 'hello'

console.log(toUpperCase(str))
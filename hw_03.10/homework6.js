// funtion - if the string contains substring:

function subString(str, subStr) {


    for (let i = 0; i < str.length; i++) {
        
        let is_equal = true

        for (let j = 0; j < subStr.length; j++) {
            
            if (str[i + j] !== subStr[j]) {
            
                is_equal = false

                break
            }
        }
        if (is_equal) {
            
            return true
        }
    }
    return false
}

let str = 'Learning JavaScript'

let subStr = 'Java'

console.log(subString(str, subStr))
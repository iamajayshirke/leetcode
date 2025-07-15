/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function(s) {
    
    let filStr = ""
    s = s.toLowerCase()
    for (let i = 0;i< s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filStr += s[i]
        }
    }
    if(filStr.length == 0) return true
    let start = 0
    let end = filStr.length-1
    while(start <= end){
        if(start == end){
            return true
        }
        if(filStr[start] !== filStr[end]) return false
        start++
        end--
    }
    return true
};

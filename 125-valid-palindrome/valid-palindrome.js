/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let first = 0
    s = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    let last = s.length-1
    
    while(first <= last){
        if(s[first] !== s[last]){
            return false
        }
        first+=1
        last-=1
    }
    return true
};
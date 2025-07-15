/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function(s) {
     let filStr = ""
    let revStr = ""
    let rev = ""
    s = s.toLowerCase()
    for (let i = 0;i< s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filStr += s[i]
            rev = s[i] + rev
        }
    }
    return rev == filStr
};

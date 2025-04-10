/**
 * @param {string} s
 * @return {boolean}
 */

const validatePelindrome = (s,first,last) => {
    if(first >= last) return true
    if(s[first] == s[last]){
        return validatePelindrome(s,first+1,last-1)
    }else{
        return false
    }
}

var isPalindrome = function(s) {
    let newStr = s.replace(/[~\`!@#\$%\^\&*()\-_=\+\[\]\\{};:'",\.<>\/? ]/g,'').toLowerCase()
    return validatePelindrome(newStr,0,newStr.length-1)
};

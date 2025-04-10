/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let revStr = ""
    for(let i = s.length-1;i>=0;i--){
        revStr+= s[i]
    }
    if(s.replace(/[~\`!@#\$%\^\&*()\-_=\+\[\]\\{};:'",\.<>\/? ]/g,'').toLowerCase() === revStr.replace(/[~\`!@#\$%\^\&*()\-_=\+\[\]\\{};:'",\.<>\/? ]/g,'').toLowerCase()){
        return true
    }else{
        return false
    }
};
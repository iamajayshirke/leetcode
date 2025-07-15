/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(s) {
    let end = s.length-1
    while(end>=0){
        if(s[end] % 2 == 0){
            end--
        }else{
            return s.substring(0, end+1)
        }
    }
    if(end < 0){
        return ""
    }
};
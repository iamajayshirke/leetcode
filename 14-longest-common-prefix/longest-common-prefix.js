/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let n = strs[0].length
    let pointer = 0
    while(n>=pointer){
        let p = strs[0][pointer]
        for(let i = 1;i< strs.length;i++){
            if(strs[i][pointer] !== p){
                return strs[0].substring(0, pointer)
            }
        }
        ++pointer
    }
    return strs[0]
};
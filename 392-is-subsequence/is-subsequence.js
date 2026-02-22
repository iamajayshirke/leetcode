/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sptr = 0
    let tptr = 0
    for(let i = sptr;i<s.length;i++){
         let j = tptr
        for(j;j < t.length;j++){ 
            if(s[i] == t[j]){
                tptr = j+1
                break
            }
        }
        if(s[i] !== t[j]){
            return false
        }
    }
    return true
};
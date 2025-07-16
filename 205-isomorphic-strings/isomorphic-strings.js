/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hash1 = {}
    let hash2 = {}
    for(let i = 0;i<s.length;i++){
        if(!hash1[s[i]] && !hash2[t[i]]){
            hash1[s[i]] = t[i]
            hash2[t[i]] = s[i]
        }else if(hash2[t[i]] !== s[i] || hash1[s[i]] !== t[i]){
            return false
        }
    }
    return true
};
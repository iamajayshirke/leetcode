/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let first = second = 0
    let count=0
    let hash = {}
    for(let i = 0;i<s.length;i++){
        if(!hash[s[i]]){
            hash[s[i]] = 1
        }else{
            ++hash[s[i]]
        }
        if(hash["R"] == hash["L"]){
            count+=1
            hash = {}
        }
    }
    return count
};
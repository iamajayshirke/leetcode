/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let first = 0
    let last = s.length-1
    for(let i = first;i<s.length/2;i++){
        let temp = s[i]
        s[first] = s[last]
        s[last] = temp
        first+=1
        last-=1
    }
    return s
};
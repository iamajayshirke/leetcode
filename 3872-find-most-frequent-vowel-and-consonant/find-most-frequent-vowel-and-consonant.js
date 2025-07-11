/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
        let hash = new Map()
    for(let i = 0;i<s.length;i++){
        
    let currentCount = hash.has(s[i]) ? hash.get(s[i]) : 0;
    // Set the new count (incremented by 1)
    hash.set(s[i], currentCount + 1);
    } 
    let vowelsArr = ["a","e","i","o","u"]
    let vowelCount = 0
    let consonantCount = 0
    for(let i = 0; i<s.length; i++){
        if(vowelsArr.includes(s[i])){
            if(vowelCount < hash.get(s[i])){
                vowelCount = hash.get(s[i])
            }
        }else{
            if(consonantCount < hash.get(s[i])){
                consonantCount = hash.get(s[i])
            }
        }
    }
    return vowelCount + consonantCount
};
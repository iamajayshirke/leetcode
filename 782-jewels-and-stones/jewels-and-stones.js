/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let n = jewels.length
    let count = 0
    let hash = new Map()
    while(n>=0){
        hash.set(jewels[n])
        n--
    }
    console.log(hash)
    for(let j = 0;j<stones.length;j++){
        if(hash.has(stones[j])){
                count++
        }
    }
    return count
};
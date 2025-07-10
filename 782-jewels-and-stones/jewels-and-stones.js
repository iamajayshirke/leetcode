/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set(jewels);
    let count = 0;
    for (let c of stones) {
        if (jSet.has(c)) count++;
    }
    return count;
};
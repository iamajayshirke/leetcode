/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if(n==1){
        return 0
    }
    let parent = kthGrammar(n-1, Math.ceil(k/2))
    let isKOdd = k % 2 == 1
    if (parent == 1) {
        if(isKOdd){
            return 1
        }else{
            return 0
        }
    }else{
        if(!isKOdd){
            return 1
        }else{
            return 0
        }
    }
};
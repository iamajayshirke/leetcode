/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(h, n) {
     let wndw = n.length
    let ptr = 0
    while(ptr < h.length){
        let j = 0
        for(j = 0;j<wndw;j++){
            if(h[ptr+j] !== n[j]){
                break
            }
        }
        if(j == wndw){
            return ptr
        }
        ptr++
    }
    return -1
};
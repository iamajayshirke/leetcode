/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let remainingSub = ""
    let end = num.length-1
    while(end>=0){
        if(num[end] % 2 == 0){
            end--
        }else{
            break
        }
    }
    if(end < 0){
        return remainingSub
    }else{
        for(let i = 0;i<= end;i++){
            remainingSub+=num[i]
        }
        return remainingSub
    }
};
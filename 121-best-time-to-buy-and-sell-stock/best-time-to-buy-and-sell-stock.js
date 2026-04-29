/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Infinity
    let maxProfit = 0
    for(let i = 0;i<prices.length;i++){
        if(min>prices[i]){
            min = prices[i]                                 //1
        }
        let currentProfit = prices[i] - min < 0 ? 0:prices[i] - min
        if(currentProfit > maxProfit)  maxProfit = currentProfit
        console.log(maxProfit,min) 
    }
    console.log(maxProfit)
    return maxProfit
};
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxP = 0
    let min = Infinity
    for(let i = 0;i<prices.length;i++){
        if(prices[i] < min){
            min = prices[i]                     
        }
        let currentProfit = prices[i] - min     
        maxP = currentProfit > maxP ? currentProfit : maxP      
    }
    return maxP
};
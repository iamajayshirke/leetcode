/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = {num:prices[0], index:0}
    let profit = 0
    for(let i = 0;i<=prices.length;i++){
        if(min.num >= prices[i]){
            min.num = prices[i]
            min.index = i
        }else {
      const currentProfit = prices[i] - min.num;
      if (currentProfit > profit) { // Replace Math.max with a conditional
        profit = currentProfit;
      }
    }
        
    }
    return profit
};
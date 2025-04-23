/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        profit = Math.max(profit, prices[i] - minPrice);
    }
    return profit;
};
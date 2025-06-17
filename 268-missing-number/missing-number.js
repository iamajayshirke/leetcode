/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length
    let sum = n * (n + 1) / 2
    let prefixSum = 0
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]
    }
    
        return sum - prefixSum
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let productLeft = []
    let productRight = []
    productLeft[0] = 1
    for(let i = 1;i < nums.length;i++){
        productLeft[i] = productLeft[i-1] * nums[i-1]
    }
    productRight[nums.length-1] = 1
    for(let i = nums.length-2;i>=0;i--){
        productRight[i] = productRight[i+1] * nums[i+1] 
    }
    
    for(let i = 0;i < nums.length;i++){
        nums[i] = productLeft[i] * productRight[i]
    }
    
    return nums
};
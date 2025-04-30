/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    let left = 0
    for(let i = 0;i<nums.length;i++){
        sum+=nums[i]
    }
    for(let i = 0;i<nums.length;i++){
        left+=nums[i]
        if(left == (sum - left + nums[i])){
            return i
        }
    }
    
    return -1
};
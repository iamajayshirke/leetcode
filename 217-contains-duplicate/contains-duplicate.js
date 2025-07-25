/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = new Map()
    for(let i = 0;i<nums.length;i++){
        console.log(nums[i])
        if(!hash.has(nums[i])){
            hash.set(nums[i])
        }else{
            return true
        }
    }
    return false
};
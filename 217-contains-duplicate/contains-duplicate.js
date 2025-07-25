/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {}
    for(let i = 0;i<nums.length;i++){
        console.log(nums[i])
        if(!hash[nums[i]]){
            hash[nums[i]] = 1
        }else{
            return true
        }
    }
    return false
};
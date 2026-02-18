/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}
    for(let i = 0;i<nums.length;i++){
        
        let checkValue = target - nums[i]
        if(checkValue in hash){
            return [hash[checkValue],i]
        } 
        
        hash[nums[i]] =  i
    }
};
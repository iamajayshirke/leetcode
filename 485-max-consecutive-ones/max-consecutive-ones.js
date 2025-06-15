/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0
let j = 0
for(let i = 0;i<nums.length;i++){
    
    if(nums[i] == 1){
        j++
        
    }else if(nums[i] !== 1){
        j = 0
    }
    count = j > count ? j : count
}
return count
};
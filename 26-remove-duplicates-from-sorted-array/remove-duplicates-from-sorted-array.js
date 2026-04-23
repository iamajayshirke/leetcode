/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pointer = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[pointer] !== nums[i]){  // 1 !== 1
            pointer+=1                  // 1
        }
        nums[pointer] = nums[i]         // 1 = 1
        // [P1,1N,2,3,3,3,4]
    }
    return pointer + 1
};
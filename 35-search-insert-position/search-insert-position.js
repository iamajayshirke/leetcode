/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length
    let mid = Math.floor(left+right/2)
    if(target > nums[right]) return right+1
    while(left < right){
       let mid = left + Math.floor((right - left) / 2); 

        if (nums[mid] < target) {
            // Target is in the upper half. We discard 'mid' and everything below it.
            left = mid + 1; 
        } else {
            // Target is either equal to nums[mid] or is in the lower half.
            // We keep 'mid' as a potential answer/boundary.
            right = mid; 
        }
    }
    return left
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 1. Sort the array first
    nums.sort((a, b) => a - b);
    
    // Initialize closestSum with a value from the first triplet
    let closestSum = nums[0] + nums[1] + nums[2];
    
    // 2. Iterate through the array, fixing the first element
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        // Use two pointers for the remaining two elements
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            // If we find an exact match, return it immediately
            if (currentSum === target) {
                return target;
            }
            
            // 3. Update closestSum if the current triplet is closer to the target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            // Move pointers based on whether the sum is too small or too large
            if (currentSum < target) {
                left++; // Try to get a larger sum
            } else {
                right--; // Try to get a smaller sum
            }
        }
    }
    
    return closestSum;
};
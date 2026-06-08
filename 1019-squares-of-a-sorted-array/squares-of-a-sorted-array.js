/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) { //-5,-3,-2,-1
    let n = nums.length;
    let result = new Array(n);
    
    let i = 0;          // Pointer at the beginning
    let j = n - 1;      // Pointer at the end
    let p = n - 1;      // Position to fill in the result array (right to left)
    
    while (i <= j) {
        let leftSquare = nums[i] * nums[i];
        let rightSquare = nums[j] * nums[j];
        
        if (leftSquare > rightSquare) {
            result[p] = leftSquare;
            i++; // Move left pointer inward
        } else {
            result[p] = rightSquare;
            j--; // Move right pointer inward
        }
        p--; // Move the result position tracker to the left
    }
    
    return result;
};
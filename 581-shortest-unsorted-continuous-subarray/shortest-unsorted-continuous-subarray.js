/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let leftInc = 0;
    let rightInc = nums.length - 1;

    // 1. Find the first element from the left that is out of order
    while (leftInc < nums.length - 1 && nums[leftInc] <= nums[leftInc + 1]) {
        leftInc++;
    }

    // If the entire array is already sorted
    if (leftInc === nums.length - 1) return 0;

    // 2. Find the first element from the right that is out of order
    while (rightInc > 0 && nums[rightInc] >= nums[rightInc - 1]) {
        rightInc--;
    }

    // 3. Find the min and max within this temporary unsorted subarray
    let subarrayMin = Infinity;
    let subarrayMax = -Infinity;
    for (let i = leftInc; i <= rightInc; i++) {
        subarrayMin = Math.min(subarrayMin, nums[i]);
        subarrayMax = Math.max(subarrayMax, nums[i]);
    }

    // 4. Expand leftInc if there are elements to its left greater than subarrayMin
    while (leftInc > 0 && nums[leftInc - 1] > subarrayMin) {
        leftInc--;
    }

    // 5. Expand rightInc if there are elements to its right smaller than subarrayMax
    while (rightInc < nums.length - 1 && nums[rightInc + 1] < subarrayMax) {
        rightInc++;
    }

    return rightInc - leftInc + 1;
};
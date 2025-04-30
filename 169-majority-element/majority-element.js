/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap.has(nums[i])) {
            hashMap.set(nums[i], 1);
        } else {
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
        }
    }

    const majorityThreshold = nums.length / 2;
    for (const [num, count] of hashMap.entries()) {
        if (count >= majorityThreshold) {
            return num;
        }
    }

    return undefined;
};
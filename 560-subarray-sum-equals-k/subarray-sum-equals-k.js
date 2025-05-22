/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
     let count = 0;
    let currentSum = 0; // To store the running sum
    let hashMap = new Map();

    // Initialize the map with a sum of 0 occurring once.
    // This handles cases where a subarray starting from index 0 sums to 'tar'.
    hashMap.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        // If (currentSum - tar) exists in the map, it means we found
        // subarrays ending at 'i' whose sum is 'tar'.
        // The number of such subarrays is the frequency of (currentSum - tar).
        if (hashMap.has(currentSum - k)) {
            count += hashMap.get(currentSum - k);
        }

        // Add the currentSum to the map, or increment its frequency if it already exists.
        hashMap.set(currentSum, (hashMap.get(currentSum) || 0) + 1);
    }
    return count;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    // 1. Initialize a Set to act as our sliding window
    // The set will store the values (nums[j]) that are within the
    // distance k from the current index i.
    const window = new Set();

    for (let i = 0; i < nums.length; i++) {
        // --- STEP 1: Maintain the Window Size (Sliding the Left Boundary) ---
        // If the current index i is greater than k, it means the element at 
        // the index i - k - 1 is now outside the allowable range [i-k, i].
        // We must remove this "oldest" element from the set.
        if (i > k) {
            window.delete(nums[i - k - 1]);
        }

        // --- STEP 2: Check for Duplicate (The Core Check) ---
        // Check if the current element nums[i] is ALREADY in the set.
        // If it is, we've found a duplicate (nums[i] == nums[j]) and 
        // we know j is in the set, meaning |i - j| <= k.
        if (window.has(nums[i])) {
            return true;
        }

        // --- STEP 3: Add Current Element (Sliding the Right Boundary) ---
        // Add the current element to the set to be checked by future elements.
        window.add(nums[i]);
    }

    // If the loop finishes without finding a valid pair, return false.
    return false;
};
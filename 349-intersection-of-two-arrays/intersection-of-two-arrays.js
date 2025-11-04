/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // 1. Convert nums1 to a Set for O(1) average time complexity lookups.
    const set1 = new Set(nums1);
    
    // 2. Use a Set for the result to automatically store only unique intersecting elements.
    const intersectSet = new Set();
    
    // 3. Iterate through nums2.
    for (const num of nums2) {
        // 4. Check if the element from nums2 exists in the Set created from nums1.
        if (set1.has(num)) {
            // 5. Add the element to the result Set. Sets only store unique values.
            intersectSet.add(num);
        }
    }
    
    // 6. Convert the result Set back to an Array before returning.
    return Array.from(intersectSet);
};
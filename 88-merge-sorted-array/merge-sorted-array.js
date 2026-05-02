/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(arr1, m, arr2, n) {
    let i = m - 1; 
    let j = n - 1; 
    
    // Pointer for the last empty slot in arr1
    let k = m + n - 1; 

    // Loop until we have merged all elements from arr2
    while (j >= 0) {
        // If arr1 has elements left AND the current arr1 element is larger
        if (i >= 0 && arr1[i] > arr2[j]) {
            arr1[k] = arr1[i]; // Place arr1's element at the end
            i--;               // Move arr1's pointer back
        } else {
            arr1[k] = arr2[j]; // Place arr2's element at the end
            j--;               // Move arr2's pointer back
        }
        k--; // Move the insertion pointer back
    }
    return arr1
};
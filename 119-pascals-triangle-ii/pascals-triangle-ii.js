/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex < 0) {
        return [];
    }

    // 1. Initialize the row. 
    // The length of the row is always rowIndex + 1, and the first
    // and last elements are always 1.
    const row = new Array(rowIndex + 1).fill(1);
    
    // 2. Iterate to build the row. 
    // Start from i = 2 (since row 0 and row 1 are already handled by initialization).
    for (let i = 2; i <= rowIndex; i++) {
        // 3. Work backward from the second-to-last element (j = i - 1) down to the second element (j = 1).
        // This is the crucial step for O(k) space:
        // By iterating backward, when we calculate row[j], the row[j-1] 
        // still holds the value from the *previous* iteration (the one before i), 
        // which is equivalent to the element from the previous row.
        for (let j = i - 1; j >= 1; j--) {
            row[j] = row[j] + row[j - 1];
        }
    }
    
    return row;
};
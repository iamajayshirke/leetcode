function removeDuplicates(arr: number[]): number {
    // If the array has 2 or fewer elements, it's already valid
    if (arr.length <= 2) return arr.length;

    // 'i' is the write pointer. The first two elements are always allowed.
    let i = 2; 

    // 'j' scans through the rest of the array
    for (let j = 2; j < arr.length; j++) {
        // Compare the current element with the element two positions behind 'i'
        if (arr[j] !== arr[i - 2]) {
            arr[i] = arr[j]; // Overwrite, don't swap
            i++;             // Move the write pointer forward
        }
    }

    return i; 
}
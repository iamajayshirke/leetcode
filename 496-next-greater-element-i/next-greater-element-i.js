/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(find, arr) {
    const stack = [];
  const ngeMap = new Map();

  // Iterate through the array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // Pop all elements from the stack that are smaller than the current element
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    // After the while loop, if the stack is empty, there is no NGE
    // otherwise, the top of the stack is the NGE
    if (stack.length === 0) {
      ngeMap.set(arr[i], -1);
    } else {
      ngeMap.set(arr[i], stack[stack.length - 1]);
    }

    // Push the current element onto the stack
    stack.push(arr[i]);
  }

  const result = [];
  // Look up the NGE for each number in the 'find' array
  for (let num of find) {
    result.push(ngeMap.get(num));
  }

  return result;
};
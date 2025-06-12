/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split('');
    let left = 0;
  let right = arr.length - 1;

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for(let i = 0;i<arr.length/2;i++){
        // Move left pointer until a vowel is found
    while (left < right && !vowels.includes(arr[left])) {
      left++;
    }

    // Move right pointer until a vowel is found
    while (left < right && !vowels.includes(arr[right])) {
      right--;
    }

    // If both pointers found vowels and haven't crossed, swap them
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      // Move pointers inward after swapping
      left++;
      right--;
    }
        
    }
    return arr.join('')
};
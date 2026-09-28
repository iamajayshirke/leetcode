/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let highest = -1
    let secondHighest1 = -1
    for (const char of s) {
  // Check if the individual character is a digit (0-9)
  if (/\d/.test(char)) {
    const num = Number(char);
    
    // Example comparison logic
    if(num > highest){
            secondHighest1 = highest
            highest = num
        }else if(num < highest && num > secondHighest1){
            secondHighest1 = num
        }
  }
}
    return secondHighest1
};
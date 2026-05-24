/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let first = 0
    let last = numbers.length - 1
    while(first < last){
        if(numbers[first] + numbers[last] == target){
            return [first+1, last+1]
        }else if(numbers[first] + numbers[last] > target){
            last-=1
        }else{
            first+=1
        }
    }
};
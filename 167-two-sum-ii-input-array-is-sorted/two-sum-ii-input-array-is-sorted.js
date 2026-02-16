/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let firstEl = 0
    let lastEl = numbers.length-1
    for(let i = 0;i<numbers.length;i++){
        let sum = numbers[firstEl] + numbers[lastEl]
        if(sum == target){
            return [firstEl+1,lastEl+1]
        }
        if(sum>target){
            lastEl-=1
        }else{
            firstEl+=1
        }
    }
};
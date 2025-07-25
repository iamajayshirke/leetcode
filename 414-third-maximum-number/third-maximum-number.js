/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = nums.sort((a,b) => b-a)
    console.log(nums)
    let thirdLargest = Infinity
    let count = 0
    
    for(let i = 0;i<nums.length;i++){
        
        if(thirdLargest > nums[i]){
            thirdLargest = nums[i]
            count+=1
        }
        
        if(count == 3){
            return thirdLargest
        }else if(count < 3 && nums.length-1 == i){
            return nums[0]
        }
    }
};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pointer = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] !== val){ // 3 !== 3
            nums[pointer] = nums[i]
            pointer+=1
        }else{
            nums[pointer] = nums[i]
            
        }
    }
    return pointer
};

// 3 2 2 3
// 2 2 _ _
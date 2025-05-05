/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   nums.sort((a,b) => a-b)
    let triplets = []
    for(let i = 0;i<nums.length;i++){
         if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
        let j = i+1
        let k = nums.length-1
        while(j<k){
            const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        triplets.push([nums[i], nums[j], nums[k]]);

        // Skip duplicate numbers for the second element
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }
        // Skip duplicate numbers for the third element
        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }

        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
        
        }
        
    }
    return triplets
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let hash = {}
    for(let i = nums2.length-1;i>=0;i--){
        if(i == nums2.length-1) hash[nums2[i]] = -1
        
        for(let j = i;j<nums2.length;j++){
            if(nums2[j]>nums2[i]){
                hash[nums2[i]] = nums2[j]
                break
            }else if(j == nums2.length-1){
                hash[nums2[i]] = -1
            }
        }
    }
    let resArr = []
    for(let k = 0;k<nums1.length;k++){
            resArr.push(hash[nums1[k]])
    }
    return resArr
};
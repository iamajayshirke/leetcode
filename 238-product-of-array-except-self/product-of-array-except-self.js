/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
	let answer = new Array(n).fill(1);
	let prev = 1;
	for (let i = n-1; i >= 0; i--) {
        answer[i] = answer[i] * prev;
        prev = prev * nums[i];
    }
    prev = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = answer[i] * prev;
        prev = prev * nums[i];
    }
    return answer;
};
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
    let stack = []
    let n = arr.length
    let ans = Array(n).fill(0)
    stack.push(n-1)
    for(let i = arr.length - 2;i>=0;i--){
        while(stack.length){
            if(arr[i] >= arr[stack[stack.length-1]]){
                stack.pop()
            }else{
                ans[i] = stack[stack.length-1] - i
                break
            }
        }
        stack.push(i)
    }
    return ans
};
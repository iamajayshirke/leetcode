/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(find, arr) {
let hash = {}
    let stack = []
    for(let i=arr.length-1;i>=0;i--){
        if(arr.length-1 == i){
            hash[arr[i]] = -1
        }else if(arr[i] < stack[stack.length-1]){
            hash[arr[i]] = stack[stack.length-1]
        }else{
            while(stack.length){
                if(arr[i] > stack[stack.length-1]){
                    stack.pop()
                }else{
                    hash[arr[i]] = stack[stack.length-1]
                    break
                }
                hash[arr[i]] = -1
                // break
            }
        }
        // if(arr[i] < stack[stack.length-1] || arr.length-1 == i){
            stack.push(arr[i])
        // }
        
        // console.log(stack, hash,stack[stack.length-1])
    }
    return find.map((e)=> hash[e])
};
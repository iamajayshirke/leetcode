/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    if(s.length == 1) return false
    
    for(let i = 0;i<s.length;i++){
        if(stack.length == 0 && [")","}","]"].includes(s[i])) return false
        if(["(","{","["].includes(s[i])){
            stack.push(s[i])
        }else if(((stack[stack.length-1] == "(") && (s[i] == ")")) || ((stack[stack.length-1] == "{") && (s[i] == "}")) || ((stack[stack.length-1] == "[") && (s[i] == "]"))){
            stack.pop()
        }else{
            return false
        }
    }
    return stack.length == 0
};
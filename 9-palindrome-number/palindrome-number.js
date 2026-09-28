/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let sum = 0
    let temp = x
    while(temp > 0){
      console.log(temp, "Temp")
        let lastDigit = Math.floor(temp%10)
      console.log(lastDigit,"Last")
        sum = sum * 10 + lastDigit
        temp=Math.floor(temp/10)
    }
    if(sum === x){
        return true
    }else{
        return false
    }
};
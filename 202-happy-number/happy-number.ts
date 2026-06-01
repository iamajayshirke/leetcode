function isHappy(n: number): boolean {
      let temp = getDigit(n)
    for(let i = 0;i<50;i++){
        if(temp == 1){
            return true
        }else{
            temp = getDigit(temp)
        }
    }
    return false
};
function getDigit(num:number):number{
    let sum = 0
    while(num >= 1){
        let temp = Math.floor(num % 10)
        sum+=temp*temp
        num/=10
    }
    return sum
}
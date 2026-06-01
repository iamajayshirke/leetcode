function isHappy(n: number): boolean {
      var visit = new Set();
    while (!visit.has(n)) {
        visit.add(n);
        n = getDigit(n);
        if (n === 1) {
            return true;
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
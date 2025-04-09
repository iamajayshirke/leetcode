/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) {
        const positivePower = -n;
        const baseResult = myPow(x, Math.floor(positivePower / 2));
        let result = 1 / (baseResult * baseResult);
        if (positivePower % 2 === 1) {
            result /= x;
        }
        return result;
    } else {
        const baseResult = myPow(x, Math.floor(n / 2));
        let result = baseResult * baseResult;
        if (n % 2 === 1) {
            result *= x;
        }
        return result;
    }
};
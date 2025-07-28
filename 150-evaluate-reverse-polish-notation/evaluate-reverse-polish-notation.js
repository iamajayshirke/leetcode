/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(arr) {
    let stack = [];
    let operations = ["+", "-", "/", "*"];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (operations.includes(item)) {
            // It's an operator
            let evaluate;
            // IMPORTANT: For postfix notation, you pop operands in reverse order of their appearance
            // in the calculation. So, the first operand popped is the *second* operand in the operation.
            const operand2 = stack.pop(); // This is the second operand
            const operand1 = stack.pop(); // This is the first operand

            // Ensure operands are numbers before performing arithmetic
            const numOperand1 = Number(operand1);
            const numOperand2 = Number(operand2);


            if (item === "+") {
                evaluate = numOperand1 + numOperand2;
            } else if (item === "-") {
                // Correct order for subtraction: operand1 - operand2
                evaluate = numOperand1 - numOperand2;
            } else if (item === "*") {
                evaluate = numOperand1 * numOperand2;
            } else if (item === "/") {
                // Division by zero check
                if (numOperand2 === 0) { // Check if the divisor (operand2) is zero
                    console.error("Error: Division by zero encountered!");
                    return NaN; // Or throw an error, or handle as per specific requirements
                }
                // Your condition `operand1 < 0` for division seems arbitrary and incorrect
                // for standard postfix evaluation. Division should always proceed unless
                // the divisor is zero.
                evaluate = Math.trunc(numOperand1 / numOperand2)
            }
            // You were pushing Math.abs(evaluate). Is this always desired?
            // For a general postfix evaluator, you'd typically push the raw result.
            console.log(evaluate)
            stack.push(Math.floor(evaluate));
        } else {
            // It's an operand (number or potentially a string that needs to be converted)
            // Ensure numbers are pushed as numbers, not strings.
            stack.push(Number(item));
        }
    }

    // After the loop, the final result should be the only element left in the stack
    console.log("Input array:", arr);
    console.log("Final stack (should contain the result):", stack);
    return stack.length > 0 ? Math.round(stack[0]) : undefined; // Return the final result
};
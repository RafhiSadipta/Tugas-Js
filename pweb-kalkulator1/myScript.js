function calculate(operator) {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    var resultField = 0;

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        switch (operator) {
            case '+':
                resultField= firstNumber + secondNumber;
                break;
            case '-':
                resultField= firstNumber - secondNumber;
                break;
            case '*':
                resultField = firstNumber * secondNumber;
                break;
            case '/':
                if (secondNumber !== 0) {
                    resultField = firstNumber / secondNumber;
                } else {
                    resultField = 'Error: Division by zero';
                }
                break;
        }
    } else {
        resultField= 'Error: Invalid input';
    }
    document.getElementById('result').textContent = resultField;
}
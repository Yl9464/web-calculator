function sum() {
    const num1 = Number(document.getElementById('firstNumber').value)
    const num2 = Number(document.getElementById('secondNumber').value)

    switch (num1, num2) {

        case '+':
            return +num1 + +num2;
            break
        case '-':
            return +num1 - +num2;
            break
        case '÷':
            return +num1 / +num2;
            break

        case '×':
            return +num1 * +num2;

        default:
            alert("error")

    }


    function punchLine() {
        const joke = 'With a COWculator'
        alert(joke + '!')
    }

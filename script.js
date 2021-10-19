function sumAll() {
    //const operation = document.getElementById('function').value
    //const total = Number(document.getElementById('firstNumber').value) + Number(document.getElementById('secondNumber').value)

    //const operator = prompt('Enter operator'(either +, -, * or / ))
    const number1 = parseFloat(document.getElementById('firstNumber').value)
    const number2 = parseFloat(document.getElementById('secondNumber').value)

    let result

    if ('' == '+') {
        result = number1 + number2

    }

    else if ('' == '-') {
        result = number1 - number2

    }

    else if ('' == '*') {
        result = number1 * number2

    }
    else if ('' == '/') {
        result = number1 / number2

    }

    return ('result')

}


function punchLine() {

    const joker = 'With a COWculator'
    alert(joker + '!')
}















function calculate() {

    var num1 = parseFloat(document.getElementById('firstNumber').value)
    var num2 = parseFloat(document.getElementById('secondNumber').value)
    var ops = document.getElementById('operation').value


    if (ops === 'addition') {
        document.getElementById('result').value = num1 + num2;
    } else if (ops == 'subtraction') {
        document.getElementById('result').value = num1 - num2;
    } else if (ops == 'divison') {
        document.getElementById('result').value = num1 / num2;
    } else if (ops == 'multiplication') {
        document.getElementById('result').value = num1 * num2;
    } else {
        alert('unknown')
    }
}

function punchLine() {

    const joker = 'With a COWculator'
    alert(joker + '!')
}
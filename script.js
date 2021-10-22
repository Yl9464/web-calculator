function sum() {

    const num1 = Number(document.getElementById('firstNumber').value)
    //const functions = document.getElementById(operation)
    const num2 = Number(document.getElementById('secondNumber').value)
    const ops = document.getElementById('operation').value
    // const operation = Number(document.getElementById('operation').value)

    //alert(Number(num1) + Number(num2))
    // alert(Number(num1) - Number(num2))
    if (ops == 'addition') {
        alert(num1 + num2)
    } else if (ops == 'subtraction') {
        alert(num1 - num2)
    } else if (ops == 'divison') {
        alert(num1 / num2)
    } else if (ops == 'multiplication') {
        alert(num1 * num2)
    } else {
        alert('unknown')
    }
}

function punchLine() {

    const joker = 'With a COWculator'
    alert(joker + '!')
}
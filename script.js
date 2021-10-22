function sum() {
    var num1 = Number(document.getElementById('firstNumber').value);
    var num2 = Number(document.getElementById('secondNumber').value);

    var sum = Number(num1) + Number(num2);

    alert(sum);
    //const total = Number(document.getElementById('firstNumber').value) + Number(document.getElementById('secondNumber').value)
    //alert('The answer is...' + total + '!')
}


function punchLine() {

    const joker = 'With a COWculator'
    alert(joker + '!')
}

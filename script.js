function sum() {
    var num1 = Number(document.getElementById('firstNumber').value);
    var num2 = Number(document.getElementById('secondNumber').value);
    var operators = document.getElementById('operation').value;

    document.getElementById('answer').value = [num1, num2, operators]
    //var sum = Number(num1) + Number(num2);
    switch (operators) {
        case "addition":
            alert('the answer is' + answer);
            break

        case "subtraction":
            alert('the answer is' + answer);
            break

        default:
            alert("unknown")
    }
    // alert(sum);
    //const total = Number(document.getElementById('firstNumber').value) + Number(document.getElementById('secondNumber').value)
    //alert('The answer is...' + total + '!')
}


function punchLine() {

    const joker = 'With a COWculator'
    alert(joker + '!')
}

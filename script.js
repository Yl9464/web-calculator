function sum() {
    var num1 = Number(document.getElementById('firstNumber').value);
    var num2 = Number(document.getElementById('secondNumber').value);

    var sum = num1 + operation + num2
    //var sum = Number(num1) + Number(num2);
    switch (sum) {
        case "add":
            alert('the answer is' + sum);
            break

        case "minus":
            alert('the answer is' + sum);
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

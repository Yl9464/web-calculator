function sum() {
    var num1 = Number(document.getElementsById('firstNumber').value);
    var num2 = Number(document.getElementsById('secondNumber').value);
    var operator = document.getElementsById('operation').value;
    var total = num1 + operator + num2
    if (operator == '+') {

    }
    else if (operator == '-') {

    }
    else if (operator == '/') {

    }
    else if (operator == '*') {

    }
    else
        aler('invalid')

    // var total = num1 + operators + num2;

    //var num1 = Number(document.getElementsById('firstNumber').value);
    //var num2 = Number(document.getElementsById('secondNumber').value);
    //var total = Number(document.getElementsById('answer').value);
    // var operators = document.getElementsById('operation').value;

    // document.getElementsById('answer').value = (num1, operators, num2)
    //var sum = Number(num1) + Number(num2);



    function punchLine() {

        const joker = 'With a COWculator'
        alert(joker + '!')
    }

function lick(){
    let numberOne = +document.getElementById('number1').value;
    let numberTwo = +document.getElementById('number2').value;
    let result = Math.pow(numberOne,numberTwo)

    document.getElementById('result').innerText = result;
}
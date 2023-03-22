function lick(){
    let number = +document.getElementById('number').value;
    let number2 = +document.getElementById('number2').value;
    let result = 1;

    for( i = 1; i <= number ; i++){
        result = Math.pow(number2,number + 1)
    }
    document.getElementById('value').innerText = result;
}
function lick() {
    let number = document.getElementById('number').value;
    let result = 0;
    for (let i = 1; i <= number; i++){
        result = result + 1 / i ;
    }
    document.getElementById('result').innerHTML = result;
}
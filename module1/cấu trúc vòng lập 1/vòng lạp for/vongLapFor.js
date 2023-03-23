
function lick() {
    let number = document.getElementById('number').value;
    let result = 0  ;
    for (let i = 0; i <= number; i++) {
        result = result + i;
    }
    document.getElementById('result').innerHTML = result;
}
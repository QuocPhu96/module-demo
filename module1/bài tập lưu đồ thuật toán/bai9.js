function lick(){
    let number = +document.getElementById('number').value;
    let result = 1;

    for(let i = 1; i <= number; i++){
        result = result * i
    }
    document.getElementById('result').innerHTML = result;
}
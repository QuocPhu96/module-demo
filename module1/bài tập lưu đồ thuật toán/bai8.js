function lick(){
    let number = +document.getElementById('number').value;
    let result = 0;

    for(let i = 0; i <= number; i++){
        result = result + (2*i + 1)/(2*i + 2);
    }
    document.getElementById('result').innerText = result;
}
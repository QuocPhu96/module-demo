function lick(){
    let number = +document.getElementById('number').value;
    let result = 0;

    for(let i = 1; i <= number; i++){
        result = result + i/(i + 1);
    }
    document.getElementById('result').innerText = result;
}
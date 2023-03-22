// function lick(){
//     let number = +document.getElementById('number').value;
//     let result = 0;
//     let Result2 = 1

//     for(let i = 1; i <= number; i++){
        
//     }
//     document.getElementById('result').innerHTML = result;
// }

function lick() {
    let number = +document.getElementById("number").value;
    let result1 = 1
    let result = 0
    for(let i = 1; i <= number; i++) {
        result1 = result1 * i;
        result += result1 ;
    }
    document.getElementById("result").innerText = result;
}

function lick(){
    let number = document.getElementById('number').value;
    let result1 = 1
    let result = 0
    for(let i = 1; i <= number; i++){
        for( j = 1 ; j <= i; J++){
            result1 = result1 * j
        }
        result += result1
        result1= 1
    }
}
function lick(){
    let number = document.getElementById('number').value;
    let result1 = 0
    let result = 0
    for(let i = 1; i <= number; i++){
        for( j = 1 ; j <= i; J++){
            result1 = result1 + 1/ (1 + J) ;
        }
        result += result1
        result1= 1
    }
}
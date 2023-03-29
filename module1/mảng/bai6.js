let numbers = new Array(20);
let count = 0

for(let i = 0  ; i < numbers.length; i++){
    numbers[i] = Math.floor(Math.random()* (20 - (-20) + 1) + (-20));
    
}
function find(value,array){
    for(let i = 0; i < array.length;i++){
        if(array[i] == value ){
            return console.log( 'value is in the array');
        }
    }
    return  console.log('V is not in the array');
}
console.log(numbers)
console.log(find(7,numbers))
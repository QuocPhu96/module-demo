let numbers = new Array(10);
let count = 0

for(let i = 0  ; i < numbers.length; i++){
    numbers[i] = Math.floor(Math.random()* (20 - 10 + 1) + 10);
    if(numbers[i] < 0){
        console.log(numbers[i]);
        count++
    }
    
}
console.log(numbers)
console.log(count)
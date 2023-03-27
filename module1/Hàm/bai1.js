function  generateArray(size, min, max){
    let numbers = new Array(size);
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = Math.floor(Math.random()* (max - min +1)+min);
    }
    // console.log(numbers);
    return numbers;
}
// let array1 = generateArray(15);
// let array2 = generateArray(10,400,500);
// console.log(array1);
// console.log(array2);
// console.log(generateArray(10,400,500));
// document.write(generateArray(20,10,100))
function find(value, array){
    for(let i = 0; i < array.length; i++){
        if (array[i] == value){
            return true;
        }
    }
    return false;
}
let array4 = generateArray(10,5,10);
console.log(array4)
console.log(( find(7,array4)))
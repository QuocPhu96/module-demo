let array = new Array(10)
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    console.log(array[i] + '; ');
}
let max = array[0]
let count = 1
for(let j = 1; j < array.length; j++){

    if(array[j]> max){
        max = array[j]
    }
    count++
  
}

console.log(max)
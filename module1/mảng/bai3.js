let array = new Array(10)
let max = 0
let count = 1
let total = 0
for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    total += array[i]
    if(array[i]> max){
        max = array[i]
        count++
    }
    
    console.log(array[i] + '; ');
    
}
    total = total / 10
console.log('số lớn nhất : ' + max + '  tại vị trí : ' + count)
console.log('tổng: ' + total)
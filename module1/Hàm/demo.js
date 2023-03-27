

let numbers = new Array(10);
for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * (30 - 10 - 1) + 10);
}
console.log(numbers);
function find(value, array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}
console.log(find(7, numbers));
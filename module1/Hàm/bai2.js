function find(value, array){
    for(let i = 0; i < array.length; i++){
        if (array[i] == value){
            return true;
        }
    }
    return false;
}
console.log(find(7,))
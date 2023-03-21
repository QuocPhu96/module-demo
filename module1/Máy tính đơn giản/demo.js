let numbers = document.getElementsByClassName('btn');
let result = document.getElementById("result");

for (let number of numbers) {
    number.addEventListener('click',function () {
        if (result.innerHTML == 0) {
            result.innerHTML = this.value;

        }
        else {
            result.innerHTML += this.value

        }
    
    });
    
} 

function equa() {
    let res = result.innerHTML
    let output = eval(res)
    result.innerHTML = output
}
function clean() {
    result.innerHTML = "0"
}
function undo() {
    let res = result.innerHTML
    result.innerHTML = res.substring(0, res.length -1);
}
function changeMoney(){
let amount = document.getElementById("amount").value;
let fromCurency = document.getElementById("fromCurency").value;
let toCurency = document.getElementById("toCurency").value;

let Result;

if (fromCurency == "VND" && toCurency == "USD"){
    document.getElementById('Result').innerHTML = "Result: " + (amount / 24000) + " $"
}
else if(fromCurency == "USD" && toCurency == "VND"){
    document.getElementById('Result').innerHTML = "Result: " + (amount * 24000) + " VND"
}
else if(fromCurency == "VND"){
    document.getElementById('Result').innerHTML = "Result: " + amount + " VND"
}
else{
    document.getElementById('Result').innerHTML = "Result: " + amount + " $"
}
}

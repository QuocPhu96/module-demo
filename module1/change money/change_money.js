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

// function conVerts(){
//     let inputCurrency = document.getElementById("inputCurr").value;
//     let select1 = document.getElementById('select1').value;
//     let select2 = document.getElementById('select2').value;
//     if(select1 == select2){
//         // alert(inputCurrency);
//         document.getElementById("conv").innerHTML = 'conver:' + inputCurrency;
//     } if (select1 == 'vnd' && select2 == 'usd'){
//         document.getElementById("conv").innerHTML = 'conver:' + (inputCurrency/24000);
//     } if (select1 == 'usd' && select2 == 'vnd'){
//         document.getElementById("conv").innerHTML = 'conver:' + (inputCurrency*24000);
// }
// }

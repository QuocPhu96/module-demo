function conVerts(){
    let inputCurrency = document.getElementById("inputCurr").value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    if(select1 == select2){
        // alert(inputCurrency);
        document.getElementById("conv").innerHTML = 'conver:' + inputCurrency;
    } if (select1 == 'vnd' && select2 == 'usd'){
        document.getElementById("conv").innerHTML = 'conver:' + (inputCurrency/24000);
    } if (select1 == 'usd' && select2 == 'vnd'){
        document.getElementById("conv").innerHTML = 'conver:' + (inputCurrency*24000);
}
}

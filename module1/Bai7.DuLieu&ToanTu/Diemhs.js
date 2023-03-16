function click(){
    let vatLy = document.getElementById('vatLy').value;
    let toan = document.getElementById('toan').value;
    let sinhHoc = document.getElementById('sinhHoc').value;
    let tong = document.getElementById('tong').innerHTML = "tong: " (vatLy + toan + sinhHoc);
    // let trungBinh = document.getElementById('trungBinh').innerHTML = "tong: " ((vatLy + toan + sinhHoc) / 3);
}
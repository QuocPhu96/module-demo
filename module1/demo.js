let numbers = prompt('nhập số bạn muốn kiểm tra')
let count = 0
let num = 2

// if (numbers < 2) {

// }
// if (numbers == 2) {
//     alert('là số nguyên tố');
// }
// for (let i = 2; i < numbers; i++) {
//     count++
//     if (numbers % i == 0) {
//         alert('không phải số nguyên tố');
//     }
//     else {
//         alert('là số nguyên tố')
//     }
// }
while (count < numbers) {
    let prime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        document.write(num + ",")
        count++
    }
    num++
}

// while (count < numbers) {
//     let isPrime = true;  // giả định rằng num là số nguyên tố
//     for (let i = 2; i < num; i++) {  // kiểm tra num chia hết cho các số từ 2 đến num - 1
//         if (num % i === 0) {
//             isPrime = false;   // num không phải là số nguyên tố
//             break;             // thoát khỏi vòng lặp for
//         }
//     }
//     if (isPrime) {
//         document.write(num + ',');   // in số nguyên tố tìm được
//         count++;            // tăng biến đếm lên 1
//     }
//     num++;                // tăng số nguyên kiểm tra lên 1
// }
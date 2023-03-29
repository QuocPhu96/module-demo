let array = new Array(30)
for (let i = 0; i < 30; i++) {
    array[i] = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    if (array[i] >= 10) {
        document.write(array[i] + "<br/>");
    }

}
document.write(array)

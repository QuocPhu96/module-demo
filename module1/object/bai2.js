let c0223g2 = [
    {
        fullName :  "Nguyễn Quốc Phú",
        dateOfBirth : "03/12/1996",
        sex : "Male",
        numberPhone : "0769969771",
},
    {
        fullName : "Nguyễn Quốc B",
        dateOfBirth : "12/02/1996",
        sex : "Male",
        numberPhone : "0900003344",
        
    },
    {
        fullName : "Nguyễn Thị B",
        dateOfBirth: "21/12/1996",
        sex : "female",
        numberPhone: "0902333220",
    }
]
for(let i = 0; i < c0223g2.length; i++){
    document.getElementById('classC0223g2').innerHTML +=
    `
    <tr>
        <td>${c0223g2[i].fullName}</td>
        <td>${c0223g2[i].dateOfBirth}</td>
        <td>${c0223g2[i].sex}</td>
        <td>${c0223g2[i].numberPhone}</td>
    </tr>

    `
}
let menus = [
    {
        name: "black coffe",
        price: '10,000VND',
        img: "https://raovat73.com/qlw/prodimg/ca-phe-den-da.jpg",
        size: ["S","M","L"]
    },
    {
        name: "milk cofe",
        price: '15,000VND',
        img: "https://neomartpro.com/wp-content/uploads/2020/05/Ca-phe-sua-da-1.jpg",
       
    },
    {
        name: "Espresso",
        price: '12,000VND',
        img: "https://buicoffeeroasters.com/wp-content/uploads/2021/05/Ly-Ca%CC%80-Phe%CC%82-Espresso-Thuy%CC%89-Tinh-1024x768.jpg",
       
    },
    {
        name: "Milk Espresso",
        price: '14,000VND',
        img: "https://mingcha.vn/wp-content/uploads/2020/08/C%C3%A0-ph%C3%AA-Espresso-S%E1%BB%AFa-n%C3%B3ng.png",
    } ,
    {
        name: "cappuchino",
        price: '25,000VND',
        img: "https://viquang.vn/wp-content/uploads/2017/06/images.jpg",
        
    }
    
]
for(let i = 0; i < menus.length ; i++){
    document.getElementById('menu').innerHTML +=
    `
    <h2>${menus[i].name}</h2>
    <tr>
        <td>
            <img id="imgs" src="${menus[i].img}" alt="">
        </td>
        <td class="fond">${menus[i].price}</td>
    </tr>
    <div>
        <th>CAM KẾT GIÁ XE KIA HUẾ TỐT NHẤT THỊ TRƯỜNG</th>
        <p>KIA Huế cam kết bằng văn bản, giá các dòng xe KIA mới nhất tại đại lý thấp nhất thị trường. Nếu phát hiện đơn vị nào báo giá thấp hơn, đại lý sẽ đền bù gấp đôi cho quý khách. (Lưu ý: hệ thống phân phối KIA Thaco được phân vùng, mỗi đại lý chỉ có thể xuất xe trong khu vực tỉnh thành mình phụ trách, không được bán xe ra ngoài khu vực được giao.)</p>
        <p>Ngoài ra KIA Huế triển khai chương trình “ưu đãi đặc biệt vay mua xe KIA” với lãi suất cạnh tranh, đi kèm nhiều đặc quyền hấp dẫn. Chương trình áp dụng cho tất cả các dòng xe Kia. Xem chi tiết chương trình mua xe KIA trả góp ngay.</p>
    </div>
    `
}
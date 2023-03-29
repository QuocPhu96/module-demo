let carKia = [
    {
    img: "https://kiavietnam.com.vn/storage/bai-dang-t3-2022/16-k3-gt/kia-25th3n2022-1.png",
    name: "KIA K3",
    price: "XEM GIÁ LĂN BÁNH",
    deluxe: "K3 1.6 DELUXE (MT): 619,000,000đ",
    luxury: "K3 1.6 LUXURY: 669,000,000đ",
    premium1: "K3 1.6 PREMIUM: 709,000,000đ",
    premium2: "K3 2.0 PREMIUM: 739,000,000đ",
    turboGT: "K3 2.0 PREMIUM: 739,000,000đ",
    detail: "https://kiahue.com/kia-k3/",
    endow: "Bạn đã sẵn sàng cùng KIA K3. Nhanh tay sở hữu ngay cùng những phần quà hấp dẫn từ KIA."
},
{
    img: "https://kiahue.com/wp-content/uploads/2022/07/kia-k5-tra-gop-nhuanads.com_.jpg",
    name: "KIA K5",
    price: "XEM GIÁ LĂN BÁNH",
    deluxe: "K5 2.0 LUXURY: 934,000,000đ",
    luxury: "K5 2.0 PREMIUM: 979,000,000đ",
    premium1: "K5 2.5 GT LINE: 1,069,000,000đ",
    detail: "https://kiahue.com/kia-k5/",
    endow: "Còn chờ gì nữa, sở hữu KIA K5 ngay trong tháng này cùng nhiều ưu đãi siêu hấp dẫn từ KIA."
},
{
    img: "https://kiahue.com/wp-content/uploads/2022/07/banner-tra-gio-kia-carnival-nhuanads.com_.jpeg",
    name: "KIA CARNIVAL ",
    price: "XEM GIÁ LĂN BÁNH",
    deluxe: "CARNIVAL 2.2D LUXURY  8 GHẾ: 1,269,000,000đ",
    luxury: "CARNIVAL 2.2D PREMIUM  8 GHẾ: 1,349,000,000đ",
    premium1: "CARNIVAL 2.2D PREMIUM  7 GHẾ: 1,399,000,000đ",
    premium2: "CARNIVAL 2.2D SIGNATURE  7 GHẾ: 1,489,000,000đ",
    turboGT: "CARNIVAL 3.5G SIGNATURE – 7 GHẾ: 1,869,000,000đ",
    detail: "https://kiahue.com/kia-carnival/",
    endow: "Sở hữu ngay Carnival với nhiều chương trình hấp dẫn ưu đãi từ KIA:"
},
{
    img: "https://kiahue.com/wp-content/uploads/2022/07/banner-tra-gop-kia-sorent-nhuanads.com-1.jpg",
    name: "KIA SORENTO ",
    price: "XEM GIÁ LĂN BÁNH",
    deluxe: "SORENTO 2.2D LUXURY: 1,179,000,000đ",
    luxury: "SORENTO 2.5G PREMIUM: 1,189,000,000đ",
    premium1: "SORENTO 2.5G SIGNATURE AWD (6 CHỖ): 1,239,000,000đ",
    premium2: "SORENTO 2.2D PREMIUM AWD: 1,329,000,000đ",
    turboGT: "KIA SORENTO 2.2D SIGNATURE AWD (6 CHỖ): 1,329,000,000đ",
    detail: "https://kiahue.com/kia-sorento/",
    endow: "Đừng bỏ lỡ cơ hội sở hữu Sorento tại KIA với nhiều chương trình ưu đãi hấp dẫn."
},
]
for(let i = 0; i < carKia.length; i++){
    document.getElementById('xeKia').innerHTML +=
    `
    <table>
        <tbody>
            <tr>
                <th class="tenXe">${carKia[i].name}</th>
            </tr>
            <tr>
                <th rowspan="6" class="imgk3"><img src="${carKia[i].img}" alt=""></th>
                <th class="giaXe">${carKia[i].deluxe}</th>
            </tr>
            <tr>
                <th class="giaXe">${carKia[i].luxury}</th>
            </tr>
            <tr>
                <th class="giaXe">${carKia[i].premium1}</th>
            </tr>
            <tr>
                <th class="giaXe">${carKia[i].premium2}</th>
            </tr>
            <tr>
                <th class="giaXe">${carKia[i].turboGT}</th>
            </tr>
            <tr>
                <td>
                    <a class="chiTiet" href="${carKia[i].detail}">XEM CHI TIẾT XE</a>
                </td>
            </tr>
            <tr>
                <th class="giaXe">ƯU ĐÃI</th>
            </tr>
            <tr>
                <th class="giaXe">${carKia[i].endow}</th>
            </tr>
        </tbody>
    </table>
    `
}
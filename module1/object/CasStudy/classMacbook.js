class Product {
    constructor(id,photo, discount, price, name, configuration1) {
        this.id = id;
        this.photo = photo;
        this.discount = discount;
        this.price = price;
        this.name = name;
        this.configuration1 = configuration1;
       
    }
}
let products = [
    new Product(1,
        "https://philong.com.vn/media/product/250-27760-21.jpg",
        12,
        30290000,
        
        "MacBook Pro M2 2022 13.3 inch (MNEP3SAA) (8 core CPU, 10 core GPU, Ram 8GB, SSD 256GB) màu bạc, chính hãng",
        "CPU: Apple M2 8 nhân, 2.4Ghz",
    ),
    new Product (2,
        "https://philong.com.vn/media/product/250-27319-1-1.jpg",
        12,
        60990000,
        "Macbook Pro 14 2021 Chip M1 Pro (Z15G001MP) (8 Core CPU, Ram 32GB, SSD 512GB, Màn hình 14inch, Xám)",
        "CPU: Apple M1 Pro (8 nhân, 14 luồng)",
),
new Product(3,
    "https://philong.com.vn/media/product/250-26443-z2901739587213_88e9b3bd5a44562700dd27dde6a1329c.jpg",
    10,
    90990000,
    "MACBOOK PRO 16 2021 M1 PRO (MK1H3) SILVER (10 CORE-CPU, RAM 32GB, 1TB SSD, 16INCH)",
    "CPU: Apple M1 Max with 10-core CPU",
),
new Product(4,
    "https://philong.com.vn/media/product/250-26026-37234_37225_7322_macbook_pro_silver_1_06eb0bb9f9e74d0fa7fd298601d8471b_master.jpg",
    8,
    38990000,
    "MACBOOK PRO 2020 TOUCH BAR M1 (Z11D000E5) (CHIP M1, RAM 16GB, SSD 256GB, MÀN HÌNH 13.3INCH, MÀU BẠC, HÀNG CHÍNH HÃNG APPLE VN, NGUYÊN SEAL",
    "Chip Apple M1 8-core CPU and 8-core GPU",
),
     new Product(5,
    "https://philong.com.vn/media/product/250-27760-21.jpg",
    12,
    30290000,
    "MacBook Pro M2 2022 13.3 inch (MNEP3SAA) (8 core CPU, 10 core GPU, Ram 8GB, SSD 256GB) màu bạc, chính hãng",
    "CPU: Apple M2 8 nhân, 2.4Ghz",
),
new Product(6,
    "https://philong.com.vn/media/product/250-27760-21.jpg",
    12,
    30290000,
    "MacBook Pro M2 2022 13.3 inch (MNEP3SAA) (8 core CPU, 10 core GPU, Ram 8GB, SSD 256GB) màu bạc, chính hãng",
    "CPU: Apple M2 8 nhân, 2.4Ghz",
),
new Product(7,
    "https://philong.com.vn/media/product/250-27760-21.jpg",
    12,
    30290000,
    "MacBook Pro M2 2022 13.3 inch (MNEP3SAA) (8 core CPU, 10 core GPU, Ram 8GB, SSD 256GB) màu bạc, chính hãng",
    "CPU: Apple M2 8 nhân, 2.4Ghz",
),
new Product(8,
    "https://philong.com.vn/media/product/250-27760-21.jpg",
    12,
    30290000,
    "MacBook Pro M2 2022 13.3 inch (MNEP3SAA) (8 core CPU, 10 core GPU, Ram 8GB, SSD 256GB) màu bạc, chính hãng",
    "CPU: Apple M2 8 nhân, 2.4Ghz",
),
]

function drawProducts() {
    document.querySelector('.row').innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        document.querySelector('.row').innerHTML +=
            `
        <div class="frame">
        <div class="fixDelete">
            <div class="fix-button"><p class="fix-product" onclick="handleFixButtonClick(${products[i].id})">fIX</p></div>
            <div><p class="delete" onclick="handleDeleteClick(${products[i].id})">DELETE</p></div>
        </div>
        <div class="zoom">
                <img class="img1" src="${products[i].photo}" alt="MacBook Pro M2 2022 13.3 inch (MNEP3SAA) (8 core CPU, 10 core GPU, Ram 8GB, SSD 256GB) màu bạc, chính hãng">
            </a>
        </div>
        <div class="logo">
            <div><img class="img2" src="https://philong.com.vn/media/brand/apple.png" alt=""></div>
            <div class="discount">${products[i].discount}%</div>
            </div>
        <div class="hashtag">Bán Chạy</div>
        <div class="name">${products[i].name.toLocaleUpperCase().substring(0, 50)}...</div>
        <div class="information">
            <ul type="disc">
                <li>${products[i].configuration1}</li>
            </ul>
        </div>
        <div class="price">${formatCurrency(products[i].price)}</div>
        <div class="muaNgay">
                <button class="nutMua">Mua Ngay</button>
        </div>

    </div>
        `
    }
}
drawProducts();
function formatCurrency(number){
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}
function handleaddproductClick(){
    document.getElementsByClassName('add-form')[0].style.display = "block";
}
function handleAddProduct(){
    let errors = [];
    d
    let photo = document.getElementById('addPhoto').value;
    let discount = +document.getElementById('addDiscount').value;
    let price = +document.getElementById('priceProduct').value;
    let name = document.getElementById('nameProduct').value;
    let configuration1 = document.getElementById('configuration1').value;

    if(discount < 0 || discount > 100){
        errors.push('discount không hợp lệ');
    }
    if(photo == ''){
        errors.push('Ảnh không được để trống');
    }
    if(name == ''){
        errors.push('Tên không được để trống');
    }
    if(price <= 0){
        errors.push('Giá tiền không hợp lệ');
    }
    if(errors.length > 0){
        let str = "";
        for( let i = 0; i < errors.length; i++){
            str += errors[i] + "\n";
        }
        alert(str);
    }
    else{
        let id;
        if(getMaxId() == -1){
            id = 1;
        }else{
            id = getMaxId();
        }
        let p = new Product(id,photo, discount, price, name, configuration1);
        products.push(p);
        // function handleaddproductClick(){
        //     document.getElementsByClassName('input-table')[0].style.display = "none";}
            drawProducts();
    }
}
function closeTable(){
    document.getElementsByClassName('input-table')[0].style.display = "none";
}
function getMaxId(){
    if(products.length > 0){
        let maxProduct = products[0];
        for(let i = 1; i < products.length; i++){
            if(products[i].id > maxProduct.id){
                maxProduct = products[i];
            }
        }
        return maxProduct.id +1;
    }
    else{
        return -1;
    }
    
    
}
function handleFixButtonClick(id){
    document.getElementsByClassName('fix-table')[0].style.display = "block"
    document.getElementById('idFix').value = id;

    let product = findProductById(id)
    if(product != null){
    document.getElementById('fix-photo').value = product.photo;
    document.getElementById('fix-discount').value = product.discount;
    document.getElementById('fix-price').value = product.price;
    document.getElementById('fix-name').value = product.name;
    document.getElementById('fix-configuration1').value = product.configuration1;
    }else{
        alert("không tìm thấy sản phẩm với id là" + id);
    }
    
}

function findProductById(id){

    for( let i = 0;i < products.length;i++){
        if(products[i].id == id){
            return products[i];
        }
    }

    return null;
}
function handleFixProduct(){
    let id = +document.getElementById('idFix').value;
    let photo = document.getElementById('fix-photo').value;
    let discount = +document.getElementById('fix-discount').value;
    let price = +document.getElementById('fix-price').value;
    let name = document.getElementById('fix-name').value;
    let configuration1 = document.getElementById('fix-configuration1').value;

    let pNew = new Product(id,photo, discount, price, name, configuration1)
    updateProductById(id,pNew);
    drawProducts();
    document.getElementsByClassName('fix-table')[0].style.display = "none"
}
function updateProductById(id,productNew){
    for(let i =0 ; i < products.length ; i++){
        if(products[i].id == id){
            products[i].photo = productNew.photo;
            products[i].discount = productNew.discount;
            products[i].price = productNew.price;
            products[i].name = productNew.name;
            products[i].configuration1 = productNew.configuration1;
        }
    }
}
function handleDeleteClick(id){
    let check = confirm('bạn có chắc muốn xoá sản phẩm này')
    
    if(check){
        for(let i = 0; i < products.length;i++){
            if(products[i].id == id){
                products.splice(i,1);
                break;
                
            }
        }
        
        drawProducts();
    }
}


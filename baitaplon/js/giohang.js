const qualityProduct = document.querySelectorAll('.quanlity');
const minusProduct = document.querySelectorAll('.cart__count--minus');
const plusProduct = document.querySelectorAll('.cart__count--plus');
const costProduct = document.querySelectorAll('.cart__money');
const total = document.getElementById('total__money');

let totalMoney = 0;

let moneyProduct = []; // Tạo một mảng để lưu giá tiền của mỗi sản phẩm

let tien = [];
let lengthProduct = costProduct.length;




// Lấy giá trị tiền từ costProduct và chuyển thành số nguyên
for(let i = 0; i < lengthProduct; i++) {
    moneyProduct[i] = parseInt(costProduct[i].textContent.replace(/\./g, ''), 10);
    tien[i] = moneyProduct[i];
    totalMoney += moneyProduct[i];
}

for(let i = 0; i < lengthProduct; i++){
    qualityProduct[i].onchange = function(e) {
        totalMoney = 0;
        qualityProduct[i].value = e.target.value;
        let valueQuality = e.target.value;
        moneyProduct[i] = parseInt(valueQuality) * tien[i];
        let price = moneyProduct[i].toLocaleString('vi-VN');
        costProduct[i].textContent = price;
        for(let j = 0; j < lengthProduct; j++){
            totalMoney += moneyProduct[j];
            total.textContent = totalMoney.toLocaleString('vi-VN');
        }
    }
}


total.textContent = totalMoney.toLocaleString('vi-VN');


console.log(moneyProduct); // Kiểm tra giá trị ban đầu của tiền sản phẩm



for(let i = 0; i < lengthProduct; i++){
    //let tien = moneyProduct[i]; // Giá trị ban đầu cho mỗi sản phẩm

    // Sự kiện khi click nút trừ
    minusProduct[i].onclick = function(e) {
        let quanlity = parseInt(qualityProduct[i].value); // Lấy giá trị hiện tại của quantity

        if(quanlity > 0) {
            quanlity--;
            qualityProduct[i].value = quanlity; // Giảm số lượng
            moneyProduct[i] -= tien[i]; // Giảm số tiền tương ứng
            totalMoney -= tien[i];
            let price = moneyProduct[i].toLocaleString('vi-VN'); // Định dạng lại số tiền
            costProduct[i].textContent = price; // Cập nhật lại trên giao diện
            total.textContent = totalMoney.toLocaleString('vi-VN');
            console.log(qualityProduct[i].value)
        }
    }

    // Sự kiện khi click nút cộng
    plusProduct[i].onclick = function(e) {
        let quanlity = parseInt(qualityProduct[i].value); // Lấy giá trị hiện tại của quantity
        quanlity++;
        qualityProduct[i].value = quanlity; // Tăng số lượng
        moneyProduct[i] += tien[i]; // Tăng số tiền tương ứng
        totalMoney += tien[i];
        let price = moneyProduct[i].toLocaleString('vi-VN'); // Định dạng lại số tiền
        costProduct[i].textContent = price; // Cập nhật lại trên giao diện
        total.textContent = totalMoney.toLocaleString('vi-VN');
        console.log(qualityProduct[i].value)
    }
}

// delete gio hang


const containerCart = document.querySelector('.cart__content');
let itemCart = document.querySelectorAll('.cart__items');
let deleteCart = document.querySelectorAll('.cart__delete');

for(let i = 0; i < deleteCart.length; i++){
    deleteCart[i].addEventListener('click', () =>{
        containerCart.removeChild(itemCart[i]);
        totalMoney -= tien[i] * qualityProduct[i].value;
        total.textContent = totalMoney.toLocaleString('vi-VN');
    });
}



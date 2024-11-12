// JavaScript để hiển thị/ẩn các tỉnh bổ sung
// const toggleButton = document.getElementById('toggleButton');
// const additionalLocations = document.getElementById('additional-locations');
// let isExpanded = false;

// toggleButton.addEventListener('click', () => {
//     if (isExpanded) {
//         additionalLocations.classList.add('hidden');
//         toggleButton.textContent = 'Xem thêm ▼';
//     } else {
//         additionalLocations.classList.remove('hidden');
//         toggleButton.textContent = 'Thu gọn ▲';
//     }
//     isExpanded = !isExpanded;
// });




// Lấy tất cả các nút có class .btn-cart
const btnCarts = document.querySelectorAll('.btn-cart');

// Thêm sự kiện click vào mỗi nút
btnCarts.forEach(btnCart => {
    btnCart.addEventListener('click', function() {
        // Tạo thông báo
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerText = 'Đã thêm vào giỏ hàng!';

        // Thêm thông báo vào body
        document.body.appendChild(notification);

        // Ẩn thông báo sau 2 giây
        setTimeout(function() {
            notification.style.opacity = '0'; // Làm mờ dần
            setTimeout(function() {
                notification.remove(); // Xóa hẳn khỏi DOM
            }, 500); // Thời gian chờ để hoàn tất hiệu ứng
        }, 2000);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownButtons = document.querySelectorAll('.dropdown-item');
    const selectedProducts = document.querySelector('.dropdown-toggle');
    const confirmButton = document.querySelector('.btn-confirm .confirm');

    // Danh sách lưu trữ các sản phẩm đã chọn
    let selectedItems = [];

    // Xử lý sự kiện cho dropdown
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.innerText;
            if (!selectedItems.includes(productName)) {
                selectedItems.push(productName);
            }
            selectedProducts.innerText = selectedItems.length > 0 ? `Các loại sản phẩm: ${selectedItems.join(', ')}` : 'Các loại sản phẩm.';
        });
    });

    // Xử lý sự kiện cho nút xác nhận
    confirmButton.addEventListener('click', function () {
        const selectedLocations = Array.from(document.querySelectorAll('input[name="location"]:checked')).map(input => input.value);
        const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(input => input.value);
        const selectedShipping = Array.from(document.querySelectorAll('input[name="shipping"]:checked')).map(input => input.value);
        const selectedPromotions = Array.from(document.querySelectorAll('input[name="promotion"]:checked')).map(input => input.value);

        let message = 'Thông tin đã chọn:\n';
        message += `Nơi bán: ${selectedLocations.join(', ') || 'Không có'}\n`;
        message += `Thương hiệu: ${selectedBrands.join(', ') || 'Không có'}\n`;
        message += `Đơn vị vận chuyển: ${selectedShipping.join(', ') || 'Không có'}\n`;
        message += `Khuyến mãi: ${selectedPromotions.join(', ') || 'Không có'}`;

        alert(message);
    });
});

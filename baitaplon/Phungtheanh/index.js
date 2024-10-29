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


// Gọi API và xử lý dữ liệu
fetch('https://dummyjson.com/products') // Sử dụng link API mới
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Chuyển đổi phản hồi thành JSON
  })
  .then(data => {
    console.log(data); // Log toàn bộ dữ liệu để kiểm tra
    const productContainer = document.getElementById('product-list'); // Lấy phần tử để hiển thị sản phẩm
    if (data.products) {
      data.products.forEach(product => {
        const productItem = document.createElement('div'); // Tạo phần tử div cho từng sản phẩm
        productItem.innerHTML = `Title: ${product.title}, Price: $${product.price}`; // Thiết lập nội dung
        productContainer.appendChild(productItem); // Thêm sản phẩm vào phần tử chứa
      });
    } else {
      console.error('Không có sản phẩm nào được trả về.');
    }
  })
  .catch(error => {
    console.error('Có lỗi xảy ra:', error); // Xử lý lỗi nếu có
  });


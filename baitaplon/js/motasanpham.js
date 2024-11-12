// Hàm tạo thông báo ở giữa màn hình
function showSuccessMessage(message) {
    const successDiv = document.createElement("div");
    successDiv.textContent = message;

    // Thiết lập CSS cho div
    Object.assign(successDiv.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(0, 128, 0, 0.9)", // màu xanh lá nhạt
        color: "white",
        padding: "20px",
        borderRadius: "5px",
        fontSize: "16px",
        textAlign: "center",
        zIndex: "1000"
    });

    // Thêm div vào body
    document.body.appendChild(successDiv);

    // Xóa thông báo sau 3 giây
    setTimeout(() => {
        successDiv.remove();
    }, 1500);
}

// Thêm sự kiện click cho nút "THÊM VÀO GIỎ"
document.querySelector("#giohang").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    showSuccessMessage("Thêm thành công"); // Gọi hàm để hiển thị thông báo
});

// Lấy tất cả các mã giảm giá
const discountCodes = document.querySelectorAll('.motasanphamContainer__box2__magiamgia--ma');

// Lặp qua các mã và thêm sự kiện click
discountCodes.forEach(code => {
    code.addEventListener('click', function() {
        // Nếu mã này đang được chọn, bỏ chọn tất cả mã
        if (code.classList.contains('selected')) {
            discountCodes.forEach(c => c.classList.remove('selected'));
        } else {
            // Bỏ chọn tất cả mã khác và chỉ chọn mã hiện tại
            discountCodes.forEach(c => c.classList.remove('selected'));
            code.classList.add('selected');
        }
    });
});
function validateForm() {
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    let valid = true;

    for (let field of requiredFields) {
        if (!field.value) {
            valid = false;
            field.classList.add('is-invalid');
            field.focus();  // Tập trung vào trường đầu tiên bị thiếu
            alert("Vui lòng điền vào ô: " + field.previousElementSibling.textContent);
            break;  // Dừng lại sau khi tìm thấy trường thiếu
        } else {
            field.classList.remove('is-invalid');
        }
    }

    if (valid) {
        alert("Lưu sản phẩm thành công!");
    }

    return valid;  // Ngăn submit nếu không hợp lệ
}
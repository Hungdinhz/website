// Lấy phần tử cha và phần tử con
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Lấy nút bấm
const removeBtn = document.getElementById('removeBtn');

// Thêm sự kiện "click" vào nút bấm để xóa phần tử con
removeBtn.addEventListener('click', function() {
    // Xóa phần tử con khỏi phần tử cha
    if (child) {
        parent.removeChild(child);
        alert('The paragraph has been removed!');
    } else {
        alert('The paragraph does not exist.');
    }
});

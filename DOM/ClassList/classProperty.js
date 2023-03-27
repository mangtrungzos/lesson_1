// ClassList property

// add 
// contains : true/false
// remove
// toggle

var boxElement = document.querySelector('.box');

// console.log(boxElement.classList.length); // Độ dài của class
// console.log(boxElement.classList[1]);
// console.log(boxElement.classList.value); // Return chuỗi trong attribute class | Trả về chính value trong class

boxElement.classList.add('red', 'center'); // add class

console.log(boxElement.classList.contains('red')); // contains class

console.log(boxElement.classList.remove('red')); // remove class

// 1. Xóa class đã có khi gọi toggle

console.log(boxElement.classList.toggle('center')) // toggle 
// Kiểm tra element này có class center không | Không có: thêm vào | Có: gỡ bỏ

// 2. Thêm class chưa có trong element khi gọi toggle

console.log(boxElement.classList.toggle('blue'))

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);


// Replace

boxElement.classList.replace('box-1', 'box-0'); // Thay thế box-1 bằng box-0


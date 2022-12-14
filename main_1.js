// Return trong hàm - Javascript cơ bản

function cong(a, b) {
    return a + b;
}

var result = cong(2, 8);
console.log(result)

// Return sẽ về giá trị của phép toán hoặc là của giá trị có những biến viết bên phải return
// Khi viết return thì những dòng code bên dưới return sẽ không được hoạt động
// Trường hợp 1 hàm mà không return thì nó sẽ trả về undefined

function cong(a, b) {
    return a.toString() + b.toString();
}

var result = cong (2, 8);
console.log(result)
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

/*
Một số điều cần biết về function
 */

// 1. Khi function trùng tên

function showMessage() {
    // console.log('Message1');
}

function showMessage() {
    // console.log('Message2');
}

// showMessage();

// 2. Khai báo biến trong hàm

function showMessage(){
    var fullName = 'sang';
    console.log(fullName);
}

showMessage();

// 3. Định nghĩa hàm trong hàm
function showMessage(){
    function showMessage2(){
        console.log('Message 2');
    }
    showMessage2();
}
showMessage();
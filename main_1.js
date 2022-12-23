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


        // CHUỖI TRONG JAVASCRIPT

// 1. Tạo chuỗi
// C1: nên sử dụng
var fullName = 'welcome'
// C2:
var fullName = new String('welcome');
// data type
console.log(typeof fullName);

// 2. backslash
var fullName = 'Welcome to \'my channel\'';

// 3. Cách check độ dài chuỗi 
var fullName = "welcome to";
console.log(fullName.length);

// 4. Độ dài khi viết Code
// Cách xuống dòng
// C1: 
var fullName = 
"Một số case sử dụng backslash một số case sử dụng backslash";

// C2: sử dụng toán tử nối chuỗi 
var fullName = "Một số case sử dụng backslash" 
+ "1. Một số case sử dụng backslash";

// 5. template string `...`

var firstName = 'sang';
var lastName = 'vu';
console.log(`Toi la: ${firstName} ${lastName}`);



        // LÀM VIỆC VỚI CHUỖI
var myString = 'Hoc Js tai F8!';
// var myString = 'Hoc Js tai Js Js F8!';

// 1. Length
    console.log(myString.length)
    // Example:
    function getContentLength(content) {
        return content.length;
    }
    
    // Mở tab Console để xem kết quả trực quan
    console.log(getContentLength('JavaScript'));
    console.log(getContentLength('Hello World'));


// 2. Find index
    // console.log(myString.indexOf('Js'));

    // Tìm chuỗi Js thứ 2
    console.log(myString.indexOf('Js', 6))

    // Tìm chuỗi Js cuối cùng
    console.log(myString.lastIndexOf('Js'))

    // Tìm kiếm search
    console.log(myString.search('Js'))

// 3. Cut string
    console.log(myString.slice(4, 6))

    // Cắt từ đầu tới cuỗi 
    console.log(myString.slice(0))

    // Cắt từ phải sang trái
    console.log(myString.slice(-3, -1))

// 4. Replace

    // Cách ghi đè tất cả chuỗi Js 
    var myString1 = 'Hoc Js tai Js Js F8!';
    console.log(myString1.replace(/Js/g, 'Javascript'))

// 5. Convert to upper case
    console.log(myString.toUpperCase())

    // Example:
    function getUpperCaseName(name) {
        return name.toUpperCase();
    }
    
    
    // Expected results:
    console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
    console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"


// 6. Convert to lower case
    console.log(myString.toLowerCase())

// 7. Trim
    // Giúp loại bỏ khoảng trằng thừa của chuỗi mà người dùng nhập vào
    console.log(myString.trim())

// 8. Split
    var language = 'Javascript, PHP, Ruby';
    console.log(language.split(', '))

// --------------------------
function reSult(mystr) {
    return mystr.split(' ');
}

var cong = 'sang vu trong';
console.log(reSult(cong))

// -------------------------
var coursesStr1 = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(coursesStr1){
    return coursesStr1.split(',');
}
console.log(strToArray(coursesStr1))


// Muốn cắt tất cả phần từ bên trong của chuỗi ta chỉ cần truyền vào 1 chuỗi rỗng
console.log(language.split(''))

// 9. Get a character by index
    const myString2 = 'sang vu';

// VD lấy chữ s 
    console.log(myString2.charAt(0))
    // Trả về chuỗi rỗng khi index không tồn tại

// C2:
    console.log(myString2[0])
    // Trả về undefined khi index không tồn tại


            // LÀM VIỆC VỚI SỐ
// Kiểu só (number) in Javascript
/*
1. Tạo giá trị Number
    - Cách tạo
    - Dùng cách nào
    - Kiểu tra data type

2. Làm việc với Number
    - To string
    - To Fixed
 */

// C1
var age = 18;

// C2 : Tránh cách sử dụng từ khóa new (new sẽ khởi tạo 1 đối tượng)
var otherNumber = new Number(9);

// How to check NaN
var result = 20 / 'abc';
console.log(isNaN(result))

// 2. To String
var age = 20;
var PI = 3.14;

var myString = age.toString();

console.log(myString)

// 2. To Fixed

console.log(PI.toFixed())

// Cách rút gọn số thập phân
var Numbers = 3000.2673986987;

// Rút gọn còn 2 số thập phân
console.log(Numbers.toFixed(2))


// Cách kiểm tra giá trị đó có phải là số hay không
function isNumber(value){
    if(typeof value === 'number'){
        return true;
    } else {
        return false;
    }
}
// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false


function isNumber(value){
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else{
        return false
    }
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false

// var number = NaN;
// console.log(isNaN(number))
// Khai bao bien
/*
 var fullName = 'Vu Trong Sang';
*/

/*
var age = 21;
*/ 

// Goi ham thong bao
/*
alert(fullName);
alert(age);
*/ 

/*
var fullName = 'sang'
console.log(fullName)
*/ 

// Create confirm box
/*
confirm('xac nhan ban du tuoi!');    
*/ 

// Tạo 1 hộp thoại và 1 ô input để nhập thông tin
/*
prompt('xac nhan du tuoi')
*/ 

/*
setTimeout(function() {

 alert('thong bao')

}, 1000)
*/ 

/*
setInterval(function() {
    console.log('day la log' + Math.random())
}, 1000)
*/

        // Toán tử số học
/*
var a = 1 + 2;
console.log(a)
*/ 

        // Toán tử gán = 
/*
var fullName = ' vu trong sang'; / Gán giá trị vu trong sang cho biến fullName 
console.log(fullName)
*/ 

        // Toán tử so sánh
/* var a = 1;
 var b = 2;
 if(a < b){
     alert('dung');
 }
*/

        // Toán tử logic

// var a = 1;
// var b = 2;
// if(a > 0 && b > 0){
//     alert('dung');
// }


        // Practice Arithmetic

var a = 2;
a++;

console.log(a)


        // Practice Assignment
var a = 1;

a /= 2;
console.log(a);



        // Toán tử ++ -- / Prefix & Postfix
var a = 6;

// Việc 1: + 1 cho a, a = a + 1 => a =7
// Việc 2: Trả về a sau khi được + 1


// Việc 1: 'a copy', 'a copy' = 6
// Việc 2: + 1 cho a, a = a + 1 => a = 7
// Việc 3: trả về ' a copy' a = 6
var output = a++;
console.log('output:', output);
console.log('a:', a);

var number = 6;

var output = number++ + --number;

// 6 + 6 
// number++ trả về 6 sau khi tính xong thì number đã tăng lên 1 nên biến number ở TH: --number là 7 và giảm đi 1 tại thời điểm đó

console.log('output', output);

var output = ++number * 2 - number-- * 2;

// // 7 * 2 - 7 * 2
// // number lúc đầu là 7, number-- trả về biến copy => = 7 

console.log('output:', output);



                // Toán tử chuỗi - String operator
var firstName = 'sang'
var lastName = 'vu'

console.log(firstName + ' ' + lastName);


var name = 'sang'

name = name + ' vu';

console.log(name);



                // Toán tử so sánh
var a = 1;
var b = 2;

if (a != b) {
        console.log('Dieu kien dung!');
} else{
        console.log('Dieu kien sai!');
}

/*------------------------------------------*/

var a = 'vu trong sang';
var b = 'vu trong sang';

if (a == b) {
        console.log('Dieu kien dung!');
} else{
        console.log('Dieu kien sai!');
}


                // Boolean
var a = 1;
var b = 2;

var isSuccess = a < b;

console.log(isSuccess);


/**
 * If - else
 */

/**
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */
var fullName = '0';

if (fullName){
        console.log('Dieu kien dung!');
}  else{
        console.log('Dieu kien sai!');
}


                // Toán tử logic
var a = 1;
var b = 2;
var c = 3;

if(a > 0 && b < 0 && c > 0){
        console.log('Dieu kien dung!');
} else{
        console.log('Dieu kien sai!');
}

                // Data in Javascript
// Number type
var a = 1;
var b = 2;
var c = 1.5;

/// Use keyword 'Typeof' to check
console.log(typeof a)

// String type
var fullName = 'sang vu';

/// Use keyword 'Typeof' to check
console.log(typeof fullName)

// Boolean 
var isSuccess = true;  false

console.log(typeof isSuccess)

// Undefined type
var age;

console.log(typeof age)

// Null
var isNull = null; // nothing

console.log(typeof isNull)

// Symbol
var id = Symbol('id'); // Đặc tính của Symbol => unique : Tính duy nhất
var id2 = Symbol('id');
// Nên id khác id2

console.log(typeof Symbol)

// Function

var myFunction = function(){
        // alert('hi everyone!');
}
myFunction();

// Object types

var myObject = {
        name: 'Sang vu',
        age: 20,
        address: 'Vung Tau',
        myFunction: function(){

        }
};
// console.log('myObject', myObject);
console.log(typeof myObject)


var myArray = [
        'Javascript',
        'PHP',
        'Python'
];

// console.log(myArray)
console.log(typeof myArray)


// Ex Data in Javascript
var a = '1';
var b = 2;

var c = typeof a;
var d = typeof b;
var e = typeof d;

console.log(c, d, e) // Output: ?

/**
 * typeof của 1 số sẽ trả về 'Number'
 * typeof của 1 chuỗi sẽ trả về 'string'
 * Note: Kết quả trả về của typeof sẽ luôn là 1 chuỗi, vậy nên typeof của d sẽ là 'string'
 */

        

                // Toán tử so sánh - P2
/**
 * === : so sánh tuyệt đối
 * !== : so sánh tuyệt đối
 */
var a = 1;
var b = '1';

console.log(a !== b);


                // Truthy / Falsy - to bool is true / false

/// EX Truthy - to bool is true
/// Các giá trị dưới đây khi convert sang boolean sẽ nhận giá trị là 'true'
console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true

console.log(!!'hi') // true

console.log(!!1) // true
console.log(!!'f8') // true
console.log(!!['Mercedes']) // true

// Thêm '!!' phía trước giá trị truthy luôn trả về true


/// Ex Falsy - to bool is false
console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false


                // Toán tử logic 
/* Câu lệnh điều kiện và phép so sánh */

var a = 1;
var b = 2;


// var result = 'A' && 'B' && NaN && 'C';

var result = 'A' || 'B' || 'C';
console.log('result', result);


// if (result){
//         console.log(' Dieu kien dung');
// } else{
//         console.log('Dieu kien sai');
// }



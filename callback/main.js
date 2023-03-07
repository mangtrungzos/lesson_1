// Callback

// Là hàm (function) được truyền qua đối số 
// Khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

function myFunction(param){
    if (typeof param === 'function'){
        param('Học lâp trinh');// Truyền value vào param
    }
}

function myCallback(value){
    console.log('Value:', value);// Sau đó thực hiện dòng lệnh này
}

myFunction(myCallback);

// Example:
function sumCb(a, b) {
    return a + b;
}
function subCb(a, b){
    return a - b;
}
function multiCb(a, b){
    return a * b;
}
function divCb(a, b){
    return a / b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
console.log(caculate(1, 2, sumCb)) // Output: 3
console.log(caculate(1, 2, subCb)) // Output: -1
console.log(caculate(1, 2, multiCb)) // Output: 2
console.log(caculate(3, 1, divCb)) // Output: 3

// 1
// function sumCb(a, b){
//     return a + b;
// }

// function caculate(cb){
//     return cb(200, 100);
// }
// console.log(caculate(sumCb));


// Callback - Part 2
Array.prototype.map2 = function(callback){
    var output = [], arrayLength = this.length; 
    
    for (var i = 0; i < arrayLength; i++){ // 2. Sau đó trong này lặp qua
        var result = callback(this[i], i); // 3. mỗi lần lặp qua thì call ngược lại callback // callback(<h2>${course}</h2>, index)
        // 4. result nhận lấy kết quả return từ callback / return`<h2>${course}<h2>`
        output.push(result);// 5. Lấy được kết quả push vào 1 mảng trống
    }

    return output; // 6. Sau cùng return lại mảng đó
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls = courses.map2(function(course){ // map2 lặp qua all phần tử của array và mỗi lần lặp qua sẽ gọi lại phương thức được truyền vào qua đối số này
    return `<h2>${course}<h2>`;
}); // 1. mỗi lần lặp qua truyền 1 callback vào

console.log(htmls);
console.log(htmls.join(''));

// var htmls = courses.map(function(course) {
//     return `<h2>${course}<h2>`;
// });

// console.log(htmls.join(''));

// forEach2, reduce2, find2, filter2



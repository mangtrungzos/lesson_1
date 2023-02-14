/*
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng
    2. for/in - Lặp qua key của đối tượng
    3. for/of - Lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhát 1 lần, sau đó lặp khi điều kiện đúng

*/

// For loop
// for (var i = 1; i <= 1000; i++){
//     console.log(i);
// }
// Đoạn mã var i = 1 chỉ được thực hiện 1 lần 
// active: i được gán = 1 so sánh i <=1000 sẽ in ra i = 1 / sau đó i sẽ tăng lên 2 và sẽ xét tiếp điều kiện i <=1000 sau đó nó sẽ in ra i tiếp tục như thế cho đến 1000

// Example:  getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
function getRandNumbers(min, max, length){
    var array = [];
    for(var i = 0; i < length; i++){ // i = length - 1 => i < length
        array[i] = (Math.random() * (max - min) + min);
    }
    return array;
}

// var a = getRandNumbers(1,2,10);
// console.log(a);
// khi chạy arry[i] = Math.random...vòng lặp này lặp i lần, ví dụ nó lặp 3 lần: lúc này i=0 1 2. 
// khi i=0 thì arry[i] chuyển thành arry[0], mà arry[0] tức là ám chỉ phần tử đầu tiên của arry đó. 
// Khi này thì phần tử đầu tiên được gán 1 số ngẫu nhiên bởi biểu thức arry[i] = Math.random... nó lặp 3 lần như vậy thì ta sẽ có 1 array gồm 3 số rồi




// Example: Tính các phần tử 
function getTotal(arr) {
    var numbers = 0;
    for (var i = 0; i < arr.length; i++){ // i so sánh với độ dài của mảng arr.length
        numbers += arr[i]; // arr[i]: Tham chiếu tới phần tử thứ i của mảng / mảng bắt đầu từ 0
    }
    return numbers;
}

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

// Được cho trước 1 mảng rỗng không chứa phần tử, nhiệm vụ là khi có phần tử truyền vào thì tính tổng của tụi nó.

// arr. length sẽ trả về độ dài của mảng lúc đã được truyền phần tử

// ví dụ:

// arr [] --> chưa có số

// truyền vào 1, 2, 3 --> arr[1,2,3]

// mảng lúc này có arrr.length = 3 phần tử

// vòng lặp i = 0 chạy lần lượt 3 lần (arr[0],arr[1]arr[2] ), mỗi lần lấy ra 1 số và cộng vào biến tổng

// vòng lặp kết thúc và biến tổng được trả về 6


// For Loop / Lấy ra các phần tử của 1 mảng

var myArray = ['Javascript', 'Ruby', 'Python'];

var arrayLength = myArray.length; // arrayLength lưu độ dài của mảng 

for (var i = 0; i < arrayLength; i++){ // i < arrayLength : lấy i so sánh với độ dài của mảng là 4 
    console.log(myArray[i]);
}

// Trường hợp không tối ưu của đoạn code này
for (var i = 0; i < myArray.length; i++){
}
// Ví dụ vòng for chạy 1000 thì mỗi 1 lần kiểm tra thì đều phải chọc vào thuộc tính length của myArray và mỗi lần phải đọc lại độ dài của mảng
// Nên chỉ mất 1 lần lấy ra độ dài của mảng và lưu vào biến arrayLength


// Example: Cho trước mảng orders là danh sách chứa các khóa học
// các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.
// Tính tổng giá trị đơn hàng

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
];

function getTotal(orders){
    var ordersLength = orders.length;
    var total = 0;
    for (var i = 0; i < ordersLength; i++){
        total += orders[i].price; // tham chiếu tới phần tử thứ 0 tại thuộc tính price
    }
    return total;
}


// For/in loop

// Đối với đối tượng Object
var myInfo = {
    name: 'Sang',
    age: '21',
    address: 'HCM'
};

for (var key in myInfo) {
    // object có bao nhiêu key thì vòng for chạy bấy nhiêu 
    // Mỗi lần chạy thì sẽ gán giá trị key(name, age, address) dưới dạng chuỗi vào biến key 
    console.log(myInfo[key]);
}

// Đối với Array / Lấy ra 
var languages = ['javascript', 'reactJs', 'golang'];
for (var key in languages){
    console.log(languages[key]);
}

// Đối với chuỗi / Lấy ra nhiều chữ cái bằng cách sử dụng for in
var myString = 'Javascript';

for (var key in myString) {
    console.log(myString[key]);
}

// Example: 
function run(object) {
    var arr = [];
    for (var key in object){
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
        
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
// Đối tượng Date

// Create 
var date = new Date();
// Biến Date này là 1 đối tượng date / Có thể truy xuất vào đối tượng date để lấy ra giá trị thời gian

console.log(date); // Kiểu Object

// C2: 
// var date = Date();
// console.log(date); // Kiểu string

var year = date.getFullYear();
// var year = date.getFullYear() + 1 / the next year

var month = date.getMonth() + 1;
var day = date.getDate();

console.log(month); // return 0 - 11
console.log(year);
console.log(day);

console.log(`${day}/${month}/${year}`);

// Gọi tới phương thức


// EX: Create function getNextYear, this function return next year. Return next year (ex: year is 2022, function return year is 2023 (type number))
function getNextYear(year){
    var date = new Date();
    return year = date.getFullYear() + 1;
}
console.log(getNextYear(2023)); 

// Example: set the year of a date object to 2020

const d = new Date();    
d.setFullYear(2020);
d.setFullYear(2021);



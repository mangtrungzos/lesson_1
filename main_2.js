/*
Mảng trong JavaScript - Arry

1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào
    - Kiểu tra data type

2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
 */
    // var languages = [
    //     'Javascript',
    //     'PHP',
    //     'Ruby',
    //     'Python',
    //     null,
    //     undefined,
    //     function(){},
    //     {},
    
    // ]
    

// console.log(Array.isArray(languages))

// Độ dài mảng
// console.log(languages.length)

// Lấy phần tử theo index
// console.log(languages[2]) 

/**
 * Làm việc với Array
 * To string
 * Join
 * Pop
 * Push
 * Shift
 * Unshift
 * Splicing
 * Concat
 * Slicing
 */

var languages1 = [
    'Javascript',
    'PHP',
    'Ruby'
];

// To String
// console.log(languages1.toString())

// Join
// console.log(languages1.join(', '))

// Pop
// console.log(languages1.pop()) // Xóa elements cuối mảng và trả về phần tử đã xóa
// console.log(languages1)

// Push
// console.log(languages1.push('Dart', 'Java'))
// console.log(languages1)

// // Shift
// console.log(languages1.shift())
// console.log(languages1.shift())
// console.log(languages1)

// Unshift
// console.log(languages1.unshift('Dart', 'Java')) 
// console.log(languages1)

// Splicing

// / Xóa
languages1.splice(1, 2) // Đặt con trỏ ở vị trí thứ nhất và xóa đi 2 phần tử
console.log(languages1)

/// Chèn 
// languages1.splice(1, 0, 'Dart', 'Java') 
// // (1, 0, '..') tham số 1: vị trí muốn chèn, tham số 2: có quyết định xóa elements nào không và chèn Dart vào 
// console.log(languages1)

// Concat 
var languages1 = [
    'Javascript',
    'PHP',
    'Ruby'
];

var languages2 = [
    'Dart',
    'Ruby'
];

// console.log(languages1.concat(languages2))

// Slicing
console.log(languages1.slice(1, 2)) // Cắt từ vị trí số 1 đến vị trí số 2
/// Cắt nguyên mảng
console.log(languages1.slice(0))
/// Có thể truyền số âm để lấy phần tử cuối mảng
console.log(languages1.slice(-2, -1)) // Lấy ở vị trí -2 và end ở -1


// EX
function getLastElement(array){
    return array.slice(-1)
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals);
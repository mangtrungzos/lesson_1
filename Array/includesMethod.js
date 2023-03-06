// includes methods

// with String
var title = 'Responsive web design';
console.log(title.includes('web'));

/// with String / truyền đối số thứ 2: position
console.log(title.includes('Responsive web', 1)); // return false
// Do bắt đầu kiếm từ vị trí sô 1 là trước chữ e 0R1e

// with Array
var courses = ['Javascript', 'PHP', 'Dart'];
console.log(courses.includes('Javascript', 1)); // false
// Đối số thứ 2 là truyền vào chỉ mục của phần tử

// truyền được số âm
// Những số nhỏ hơn 1 sẽ mặc định = 0
// 3 là number of elements array
// 3 + -1 = 2 => kiếm từ vị trí số 2 
console.log(courses.includes('Javascript', -1))// false 
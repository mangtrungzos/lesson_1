// Note: Không phải lúc nào length cũng tượng trưng cho số lượng phần tử
var courses = [
    'Javascript',
    'PHP'
];

courses.length = 10; // Empty: được hiểu là không có gì cả

// C1
for (var index in courses){ // for in: lặp qua những phần tử thực
    console.log(courses[index]);
}

// C2 
var courses = new Array(10);// 10: được hiểu là độ dài của mảng / còn nếu truyền từ 2 đối số trở lên sẽ là phần tử của mảng

courses.push('Javascript', 'PHP');

console.log(courses);



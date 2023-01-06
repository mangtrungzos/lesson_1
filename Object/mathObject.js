// Math Object

/*

- Math.PI
- Math.round()
- Math.abs()
- Math.cell()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()

*/

console.log(Math.PI);
console.log(Math.round(1.3));
console.log(Math.abs(4)); // -4 --> 4
// console.log(Math.cell(4.1)); // 4.00000001 -> 5
// console.log(Math.floor(5.9));

console.log(Math.random());

// Tạo ra 1 dãy số ngẫu nhiên từ 1 khoảng cho trước
console.log(Math.floor(Math.random() * 10));

var random = Math.floor(Math.random() * 5);
// random từ 0 - 4 / Reason: làm tròn dưới 

var bonus = [
    '10 coin', // 0
    '20 coin', // 1
    '30 coin', // 2
    '40 coin', // 3
    '50 coin', // 4
];

console.log(bonus[random]);

// Tạo ra tỉ lệ 5%
var random = Math.floor(Math.random() * 100);
if (random < 5){ // Tỉ lệ random chỉ chiếm 5%
    console.log('Cường hóa thành công!');
}

console.log(Math.min(-100, 1, 90, 100));

// EX
function getRandomItem(item){
    var random = Math.floor(Math.random() * item.length);
    return item[random];
    // Solution 2:
    // return item[Math.floor(Math.random() * item.length)];
}
console.log(getRandomItem(['Gang than linh XD', 'Gang than linh TD', 'Gang than linh NM']));
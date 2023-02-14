// Mảng - Lấy ra từng phần tử
var languages = [
    'java',
    'php',
    'python'
];

for (var value of languages){
    console.log(value);
}

// Chuỗi - Lấy ra từng ký tự
var languages = 'java';
for (var value of languages){
    console.log(value)
}

// Object - Lấy giá trị của key
var myInfo = {
    name: 'mangtrungzos',
    age: 18
};

for (var value of Object.keys(myInfo)){
    console.log(myInfo[value])
}

// C1: Gọi đến đối tượng Object / Trả về 1 mảng các key 
console.log(Object.keys(myInfo));
// C2: / Trả về 1 mảng các value
console.log(Object.values(myInfo));
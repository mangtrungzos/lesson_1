Array.prototype.reduce2 = function(callback, result){ // result mặc dù là biến khởi tạo nhưng cũng sẽ được return ra ngoài trở thành kq cuối cùng
    // Trong prototype methods thì this chính là mảng
    for (let i = 0; i < this.length; i++){ // Mỗi lần lặp qua phần tử của mảng thì gọi lại 
        result = callback(result, this[i], i, this) // this[i]: phần tử hiện tại được lặp qua
    }
    return result; // Khi lặp xong return lại result
}

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce2((total, number, index, array) => { // Biến tích trữ ban đầu cuối cùng cũng trở thành kq cuối cùng được return ra ngoài
    console.log(total, number, index, array);
    return total + number;
}, 10)

console.log(result);

/** Run */
// Giả dụ trong lần lặp thứ nhất biến total = 1, number = 2 => return 3 
// Có nghĩa là callback ở for sẽ được return ra 3 và 3 sẽ được lưu vào biến tích trữ result
// Khi đổi lần lặp result = 3 thì callback(result,...) sẽ có result = 3 và lại chạy ngược vào lại total => total = 3
// => 3 + 3 = 6 return 6 => callback return 6 => result = 6 



// Trường hợp không truyền initialValue - Phải lặp từ phần tử thứ 2 
Array.prototype.reduce1 = function(callback, result){ 
    let i = 0;
    if(arguments.length < 2){ // Trong TH này không truyền initialValue / Nếu truyền nó sẽ bằng 2 nghĩa là reduce truyền vào 2 đối số
        i = 1; // Lặp từ i = 1 và gán biến tích trữ = phần tử đầu tiên of mảng  
        result = this[0]; // accumentlator this[0]: first element of array = 1
    }
    for (; i < this.length; i++){ 
        result = callback(result, this[i], i, this) 
    }
    return result;
}

const numBers = [1, 2, 3, 4, 5];

const results = numBers.reduce1((total, number, index, array) => { 
    console.log(total, number, index, array);
    return total + number;
}, /*10*/)

console.log(results);
    


// Examples:
function arrToObj(arr){
    return arr.reduce((obj, [key, value]) =>{
        obj[key] = value;
        return obj;
    }, {});
} 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }


// var list = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// const arrToObj = (list)=>{
//     return list.reduce((obj, item) => {
//         obj[item[0]] = item[1];
//         return obj;
//     }, {}); 
// }
// Trong lần lặp đầu tiên, obj sẽ được gán giá trị khởi tạo là {} 
// obj = {}
// item là từng phần tử trong arr qua mỗi lần lặp Trong lần lặp đầu tiên này item là ['name', 'Sơn Đặng']

// item[0] là 'name' đóng vai trò là key
// item[1] là 'Sơn Đặng' đóng vai trò là value

// Cách thêm cặp key value vào object: obj[item[0]] = item[1]

// Rồi callback function sẽ return về obj Lúc này obj = {name: 'Sơn Đặng'}

// Trong lần lặp tiếp theo, obj sẽ có giá trị của lần lặp đầu tiên là obj = {name: 'Sơn Đặng'}

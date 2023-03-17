// forEach2

// Định nghĩa 1 phương thức cho 1 array constructor và khi array cons có những phương thức nào thì đối tượng được khởi tạo từ nó sẽ được thừa hưởng lại những phương thức này
// => courses là 1 array thì nó sẽ được khởi tạo từ array constructor 
// courses cũng thừa 1 key là forEach2

// Ôn lại
// 1.Object prototype
// 2. for in
// 3. hasOwnProperty : check whether an object contains a key

Array.prototype.forEach2 = function(callback){
    for (var index in this){ // for in k chỉ duyệt qua các elements trong mảng mà còn duyệt qua elements nằm trong proto
        if (this.hasOwnProperty(index)){ // kiểm tra xem 0 1 2 forEach2 có phải là con nằm trong những thuộc tính và phương thức gần nhất của object không
            callback(this[index], index, this);
        }
        // console.log(index, this.hasOwnProperty(index));// nên mới console.log => index: forEach2
    }
}

// this.hasOwnProperty(index) kiểm tra xem các phần tử phương thức gần nhất 
// var courses = new Array(100);
var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];// courses là arr được khởi tạo từ arr cons nên nó sẽ được kế thừa những method có sẵn nằm trong proto



courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});


// filter

Array.prototype.filters = function(cb){
    var output = [];
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index], index, this); // 2. Sẽ nhận để 1 biến result ở cb
            if (result){ // 3. Sau đó kiểm tra result / nếu result đúng thì push phần tử hiện tại vào this[index]
                output.push(this[index]);
            }
        }
    }
    return output;
}
var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
];

var filterCourses = courses.filters((course,index, array) =>{
    return course.coin > 700; // 1. Nếu điều kiện này đúng
});
console.log(filterCourses)


// some: true / false
/// Không lặp qua phần tử trống

Array.prototype.some2 = function(cb){
    for (var index in this){
        if(this.hasOwnProperty(index)){
            if(cb(this[index], index, this)){// Nếu điều kiện này đúng thì trả về true
                return true;
            }
        }
    }
    return false;
}

/** C2:
 Array.prototype.some2 = function(cb){
    var output = false
    for (var index in this){
        if(this.hasOwnProperty(index)){
            if(cb(this[index], index, this)){// Nếu điều kiện này đúng thì trả về true
                output = true;
                break;
            }
        }
    }
    return output;
}
 */

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }
];

var result = courses.some((course, index, array) =>{
    return course.isFinish; // Tìm thấy elements thỏa mãn điều kiện return true
});

console.log(result); 


// every: true / false
// For in : không duyệt qua mảng rỗng
Array.prototype.every = function(cb){
    var output = true;
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index], index, this)
            if(!result){ // Chỉ cần 1 lần sai sẽ set output = false -> thoát for
                output = false;
                break;
            }
        }
    }
    return output;
}


var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true,
    }
];

var result = courses.every((course, index, array) => {
    return course.isFinish; 
});

console.log(result);

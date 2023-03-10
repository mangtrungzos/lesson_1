// forEach2

// Định nghĩa 1 phương thức cho 1 array constructor và khi array cons có những phương thức nào thì đối tượng được khởi tạo từ nó sẽ được thừa hưởng lại những phương thức này
// => courses là 1 array thì nó sẽ được khởi tạo từ array constructor 
// courses cũng thừa 1 key là forEach2

// Ôn lại
// 1.Object prototype
// 2. for in
// 3. hasOwnProperty

Array.prototype.forEach2 = function(callback){
    for (var index in this){ // for in k chỉ duyệt qua các elements trong mảng mà còn duyệt qua elements nằm trong proto
        if (this.hasOwnProperty(index)){
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


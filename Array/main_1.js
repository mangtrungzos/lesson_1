/*
    Array methods

    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 0
    },
    {
        id: 5,
        name: 'ReactJs',
        coin: 0
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 10
    }
    
];

// forEach()
courses.forEach(function(course, index){
    console.log(index, course);
});

// every()
var isFree = courses.every(function(course, index){
    console.log(index);
    return course.coin === 0; // Return rất quan trọng trong every()
});

console.log(isFree);
// Lặp qua từng phần tử của mảng và mỗi lần lặp thì sẽ gọi ngược lại hàm mà chúng ta đã truyền, truyền đó hàm đó 1 tham số: phần tử của mảng courses
// Khi nhận được từng phần tử này rồi so sánh 
// Lần đầu tiên nó sẽ nhận phần tử đầu tiên và nếu phần tử đó đúng thì lúc đó mới đi kiểm tra phần tử số 2 và nếu đúng sẽ xuống element số 3
// Nếu điều kiện mà sai ngay từ đầu thì chỉ kiểm tra thằng đầu tiên và ngừng lại, nó không duyệt qua các phần tử nữa và ngừng lại luôn
// Và trả về là false


// Some()
var isFree = courses.some(function(course, index){
    console.log(index);
    return course.coin === 0; // Return rất quan trọng trong every()
});

console.log(isFree);


// find()
var course = courses.find(function(course, index){
    return course.name === 'Ruby'; 
});

console.log(course);
// Mỗi lần lặp qua thì function sẽ được gọi lại và được trả về cho chúng ta từng phần tử
// Nếu hàm return là true / Tức là khi kiểm tra đến phần tử nào mà return true thì nó sẽ lấy phần tử đó và gán ngược vào biến course và vòng kiểm trả kết thúc
// find chỉ trả về 1 phần tử đúng


// filter()
var listCourse = courses.filter(function(course, index){
    return course.name === 'Ruby'; 
});

console.log(listCourse);
// Tìm kiếm qua 1 danh sách


// Example: getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(sports){
    var sport = sports.filter(function(sported){
        return sported.like > 5;
    });
    return sport;
}
/*
function getMostFavoriteSport(sports){
    return sports.filter(function(sport){
        return sport.like > 5;
    })
}
*/

// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


// map()
var coursesList = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 1
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 1
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 1
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 10
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 12
    }

];

// Biến mong muốn nhận về 1 array có sự thay đổi ở name và có trường mới
// map() method sẽ return lại 1 mảng mới / mảng mới sẽ có số lượng phần tử bằng với số lượng phần tử có giá trị của mảng cũ
// Ở bên trong map(...) đang thực hiện 1 vòng lặp, lặp qua từng phần tử của mảng và mỗi khi lặp qua 1 phần tử sẽ gọi lại 1 function để nó thực thi tạo ra sự thay đổi
// Lần thứ nhất chạy qua phần tử thứ nhất và trả về biến nhận được là 'course'
// Và function thứ nhất return lại cái gì thì cái vị trí đầu tiên này sẽ nhận được cái đó
function courseHandler(course, index){
    // console.log(course);
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        cointext: `Gia ${course.coin}`,
        index: index,
        originArray: coursesList, // originArray trả về array gốc
    };
}

var newCourses = coursesList.map(courseHandler); // Truyền vào trong map 1 đối số là 1 function
// newCourses trả về 1 arr
console.log(newCourses);

//Example: Tách ra 1 mảng mới và chỉ lấy tên của tất cả các khóa học
// return {
//     name: `Khoa hoc: ${course.name}`,
// }

/**------------------------------------------------------------------- */

// Reduce() method 
// Mong muốn nhận về tổng số coin
// Biến lưu trữ
// Thực hiện việc lưu trữ
// currentValue: phần tử hiện tại
var i = 0;
function coinHandler(accumulator, currentValue){ // accumulator: biến lưu trữ và giá trị khởi tạo sẽ được gán cho biến này
    i++;
    var total = accumulator + currentValue.coin;
    // console.table({
    //     'Lượt chạy:': i,
    //     'Biến tích trữ:': accumulator,
    //     'Giá khóa học:': currentValue.coin,
    //     'Tích trữ được:': total
    // });
    return total; // Gọi là lưu trữ bởi vì nó giúp lưu trữ lại giá trị từ lần chạy đầu tiên cho tới lần cuối cùng
} // Trong function này return cái gì thì sẽ lưu trữ cái đó

// ở lần chạy thứ 1 biến tích trữ sẽ = 0 và return total lại = 1 / Sang lần chạy thứ 2 thì biến tích trữ luôn luôn bằng giá trị tích trữ được của lần trước đó
// Khi đó accumulator lần chạy thứ 2 sẽ bằng 1
var totalCoin = coursesList.reduce(coinHandler, 0); 

// initial value : giá trị khởi tạo
// khi reduce hoạt động sẽ gọi là sẽ gọi ngược lại coinHandler() và trả ngược lại vài tham số
// currentValue: giá trị hiện tại/ mỗi khi reduce gọi lại function thì lúc đó đang ở 1 vị trí nào đó của phần tử ở trong arr
// Ví dụ nằm ở phần tử số 2 thì sẽ lấy object số 2 trả về currentValue 

console.log(totalCoin);


/**---------------------------------------------------------------------- */
var totalCoin = coursesList.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.coin;
}, 0); // initial value
console.log(totalCoin);














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






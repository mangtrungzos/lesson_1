// Câu lệnh rẽ nhánh - If else

var date = 2;

if (date === 2){
    console.log('Hôm nay là thứ 2');
} else if (date === 3){
    console.log('Hôm nay là thứ 3');
} else if (date === 4){
    console.log('Hôm nay là thứ 4');
}


// EX:
function run(a){
    if (a % 15 === 0){
        return 3;
    } else if (a % 5 === 0){
        return 2;
    } else if (a % 3 === 0){
        return 1;
    }
}

console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3


// Câu lệnh rẽ nhánh - Switch
var date = 3; // date = 9 use default

switch(date){
    case 2:
        console.log('Hôm nay là thứ hai');
        break;
    case 3: // === : sử dụng toán tử === để so sánh
        console.log('Hôm nay là thứ ba');
        break; 
    case 4:
        console.log('Hôm nay là thứ tư');
        break;
    case 5:
        console.log('Hôm nay là thứ năm');
        break;
    // Gặp từ khóa break sẽ thoát khỏi khối lệnh switch
    default:
        console.log('Không biết');
}

// Example switch case:
function run(fruits) {
    var result;

    switch (fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
    }

    return result;
}
// ------------------------------------------------- //

var day = 3;

switch(date){
    case 2:
    case 3: // xét thấy case 3 đúng nên sẽ lọt vào vào case 4 và gặp break thoát
    case 4:
        console.log('Hôm nay là thứ 2, 3, 4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
}

/// Khi so sánh tính đúng sai sử dụng if/else : < > !==
/// Biết trước giá trị sử dụng switch case và phải hơn 3 case


// Toán tử 3 ngôi - Ternary operator
var course = {
    name: 'Javascript',
    coin: 250
}

// if (course.coin > 0){
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Miễn phí');
// }

// coin > 0 -> 250 coin / coin = 0 -> 'miễn phí'

var result = course.coin > 0 ? `${course.coin} Coins`: 'Miễn phí'
// Nếu điều kiện này đúng thì sẽ lấy giá trị của vế thứ 2
console.log(result);

var a = 1;
var b = 2;

var c = a > 0 ? a : b;
console.log(c);



// Làm bài
function getCanVoteMessage(age){
    var result = age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
    return result;
}

// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

var age = n;
var voteable = age < 18 ? `Too young` : `Old enough`;
alert(voteable);
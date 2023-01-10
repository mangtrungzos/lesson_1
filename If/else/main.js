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


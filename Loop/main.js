/*
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng
    2. for/in - Lặp qua key của đối tượng
    3. for/of - Lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhát 1 lần, sau đó lặp khi điều kiện đúng

*/

// For loop
// for (var i = 1; i <= 1000; i++){
//     console.log(i);
// }
// Đoạn mã var i = 1 chỉ được thực hiện 1 lần 
// active: i được gán = 1 so sánh i <=1000 sẽ in ra i = 1 / sau đó i sẽ tăng lên 2 và sẽ xét tiếp điều kiện i <=1000 sau đó nó sẽ in ra i tiếp tục như thế cho đến 1000

// Example:  getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
function getRandNumbers(min, max, length){
    var array = [];
    for(var i = 0; i < length; i++){
        array.push(Math.random() * (max - min) + min);
    }
    return array;
}
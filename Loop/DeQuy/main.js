
// Problems of De quy
// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng
// Điểm dừng của đệ quy là điểm mà chúng ta không gọi lại nó nữa



// function deQuy(){
//     if (num < 0){
//         // Dừng
//         // ... Logic
//         return;// Khi return ở đây thì function sẽ kết thức và không gọi lại đệ quy nữa
//     }
//     deQuy();
// }

// deQuy(10);



// A -> Loop -> CPU
// A -> De quy -> RAM 
// Functional programing (lập trình hướng hàm)



function countDown(num){
    if (num > 0){
        // loop 
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(3);

// Đầu tiên sẽ chạy countDown(3) / Lọt vào hàm vừa gọi và truyền num = 3 
// Khi đó num > 0 -> 3 > 0 / Thỏa mãn điều kiện / Sau đó in ra số 3 console.log(3)
// Sau đó nó sẽ return lại chính nó return countDown(...) và lấy num - 1 khi đó 3 - 1 = 2 và 3 - 1 = 2 gọi lại chính nó
// Khi đó sẽ lại đọc từ ngoài vào (vì ta đã gọi lại chính nó) thì lúc đó 2 thỏa mãn điều kiện => console.log(2)
// Rồi cứ tượng tự như vậy => console.log(1) -> khi 1 đến đây 1 - 1 = 0 gọi lại chính nó num > 0 (0 > 0) -> false lọt vào điều kiện dừng và return ra num rồi kết thúc.


function loop(start, end, cb){ // cb : callback
    if (start < end) {
    cb(start);// start ở đây được hiểu là index
        return loop(start + 1, end, cb);// Gọi lại chính nó thì cũng phải truyền đủ tham số của chính nó
    }
}



// Logic
var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length, function(index){ // Lặp từ phần tử đầu tiên của mảng cho tới array.length - 1, truyền 1 cb (1 function gọi lại)
    // Và function gọi lại này mỗi lần gọi lại sẽ trả lại index 
    console.log(array[index]);
});


// Tính giai thừa
// Of 3 : 3 * 2 * 1 = 6
// 6 * 5 * ... * 1 = 720

function giaiThua(num){
    var output = 1;
    for (var i = num; i > 0; i--){
        output = output * i;
    }
    return output;
}

console.log(giaiThua(6));
// i  được gán cho num là 6, 6 > 0 thì khi đó 1 = 1 * 6 / Vòng lặp kết thúc lần thứ nhất chạy sau đó nó sẽ vòng lên lần nữa
// Lúc đó i-- =  5 / output lúc này đã bằng 6 => 6 = 6 * 5
// Lặp lại tiếp i-- = 4 output = 6 * 5 * 4 => lặp cho tới hết kết thúc vòng lặp / Nó sẽ trả về tổng output cuối cùng 

// 6 5 4 3 2 1 = 720 
function TinhGiaiThua(number){
    if (number > 0){ // Điểm dừng
        return number * TinhGiaiThua(number - 1);
    }
    return 1;
}

console.log(TinhGiaiThua(6));
// Đầu tiên TinhGiaThua được gọi truyền number = 6 / number = 6 thỏa mãn điều kiện lọt vào
// return 6 * / dừng tại number * / Bởi vì khi gặp TinhGiaiThua thì nó sẽ gọi lại TinhGiaiThua
// Khi đó number - 1 = 5 gọi lại TinhGiaiThua thì khi đó number = 5.... 


//De qui
// function giaiThua(number) {
//     if(number > 0){
//       return number * giaiThua(number - 1);
      /**
       * return 6 * giaiThua(6 - 1) => lúc này number trong giaiThua = 5 / => number = 6 *
       * return 5 * giaiThua(5 - 1) => lúc này number trong giaiThua = 4 / => number = 6 * 5 * 
       * return 4 * giaiThua(4 - 1) => lúc này number trong giaiThua = 3 / => number = 6 * 5 * 4
       * return 3 * giaiThua(3 - 1) => lúc này number trong giaiThua = 2 / => number = 6 * 5 * 4 * 3
       * return 2 * giaiThua(2 - 1) => lúc này number trong giaiThua = 1 / => number = 6 * 5 * 4 * 3 * 2 
       * return 1 * giaiThua(1 - 1) => lúc này number trong giaiThua = 0 nên bị hủy do ko thỏa điều kiện
       * */
//     }
//     return 1; / => number = 6 * 5 * 4 * 3 * 2 * 1 
//   }

var i = 0;

while (i < 1000) {
    i++;
    console.log(i);
}
/*----------------------------- */
var i = 1;
while (i <= 1000){
    console.log(i);
    i++;
}

/*-----------------------------*/
var myArray = ['Java','python'];
var i = 0;
// var myArrLength = myArray.length;
while (i < myArray.length){
    console.log(myArray[i]);
    i++;
}
/*---------------------------- */


// do/while loop
var i = 0;
do{
    // Thực hiện đoạn mã trong đây tương ứng với số lần mà nó chạy
    i++;
    console.log(i);
} while (i < 10);


// Kiểm tra điều kiện từ lần lặp thứ 2 trở đi
// Lần đầu tiên lặp sẽ không cần kiểm tra điều kiện mà in ra giá trị ở trong do và sau đó từ lần thứ 2 trở đi mới xét điều kiện.

// Example: nạp thẻ cào

var i = 0;
var isSuccess = false; // Đặt 1 flag (cờ) : isSuccess để lưu giá trị để biết có thành công hay không
// Đầu tiên để thất bại

do {
    i++;
    console.log('Nạp thẻ lần ' + i);
    // Thành công
    if (true){
        isSuccess = true;
    }
    // Thất bại
    // if (false){
    //     isSuccess = true;
    // } 
    // Thất bại sẽ thực hiện lại 3 lần
} while (!isSuccess && i <= 3); // Vòng lặp sẽ chạy khi thất bại
// Nạp thẻ thất bại và i < 3 mới tiến hành nạp lại

// Nếu if là true thì thành công nên nó sẽ vô điều kiện và gán isS là true và xuống while !isS là false thoát
// Nếu if là false bằng việc nạp thất bại nên không vô đc if xuống while !iSs là true && i <=3 nên tiếp tục vòng lại cho đến khi if thành công hoặc k thỏa điều kiện i <= 3 thì dừng.
/*
Hàm (function) trong Javascript

1. Hàm 
    - Một khối mã
    - Làm 1 việc cụ thể

2. Loại hàm
    - Built-in
    - Tự định nghĩa

3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị

4. Tạo hàm đầu tiên
 */

// a-z A-Z 0-9 _ $ 

// function showDialog(..) / Trong ngoặc truyền vào là 1 tham số

function showDialog() {
    // alert('Welcome back to my channel!');   
}

// call ()
showDialog();

// Tham số - Javascript cơ bản
function writeLog(message, message2){
    // console.log(message);
    // console.log(message2);
}

// writeLog('text message', 'text message 2');

// Khi gọi tới function đó và truyền 1 giá trị vào thì đó sẽ là đối số


// Arguments


function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} -`
        // arguments ở đây là array
        // Vòng for lấy giá trị đầu tiên trong arguments rồi gán cho biên param và sau đó sẽ chạy đoạn code dc viết trong {}
        // Nối với những giá trị của param lấy được bằng toán tử '+='
        // Sử dụng template string để nối chuỗi ${}
    }
    console.log(myString)
}

writeLog('log 1', 'log 2', 'log 3');

function writeMessage () {
    var myMessage = '';
    for (var param of arguments) {
        myMessage += `${param} `
    }
    console.log(myMessage);
}
writeMessage('Text 1', 'Text 2', 'Text 3')
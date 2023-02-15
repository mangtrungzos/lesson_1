// Break & Continue in loop 
for (var i = 0; i < 10; i++){
    console.log(i);
    if (i >= 5){
        break; // Điều kiện đúng từ khóa Break được thực thi
    }
    // Break được thực thi trong vòng lặp thì nó sẽ thoát khỏi vòng lặp tính từ khi Break được thực thi
}

for (var i = 0; i < 10; i++){
    if (i%2 !== 0){ // Kiểm tra i là số lẻ use toán tử % 
    // 1 Số mà chia cho 2 có dư đó là số lẻ

        continue; // Khi Continue được thực thi sẽ tiếp tục tại dòng code 14 và bỏ qua các dòng dưới, tới lần lặp tiếp theo từ Continue
        // Trong những lần lặp là số lẻ thì sẽ bị bỏ qua và không được in ra 
    }
    console.log(i)
}

// Example: Break
var text = "";
for (var i = 0; i < 10; i++){
    if (i === 3){
        break;
    }
    text += " The number is " + i;
    console.log(text);
}
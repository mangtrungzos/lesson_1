// Vòng lặp lồng nhau - Nested loop

var myArray = [
    [1, 2], // 0
    [3, 4], // 1
    [5, 6]  // 2
];

for (var i = 0; i < myArray.length; i++){
    // console.log(myArray[i]);
    for (var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
// i = 0, thực thi lệnh so sánh i < 3 / sau đó nó sẽ chạy vòng for bên trong
// j được gán = 0, j < 2 (j bé hơn chiều dài mảng con là 2 [1, 2]) thì khi đó sẽ in ra số 1 của mảng con 
// Sau đó j tiếp tục tăng lên 1 để in ra 2
// Khi vòng lặp con thực thi xong thì nó sẽ ra ngoài vòng cha để tăng i lên 1

for (var keyMyArray in myArray) {
    // console.log(keyMyArray);
    // console.log(myArray[keyMyArray])
    for (var valueChildArray in myArray[keyMyArray]) {
      console.log(myArray[keyMyArray][valueChildArray]);
    }
}
// key của myArray lưu vào keyMyArray là số từ 0 1 2 nên muốn lấy ra value của key thì ta console myArray và truyền key vào


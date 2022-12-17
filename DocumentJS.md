# Từ khóa khai báo biến in JS
- var tên biến
- Tên biến có phân biệt hoa và thường chữ và số
- Viết code có dấu ';' có thể viết được trên cùng 1 dòng
1. alert : tại 1 thời điểm thì chỉ hiển thị 1 biến mà thôi

# Một số hàm built-in (built-in function)
    1. Alert : Tạo ra 1 bảng  thông báo
    2. Console : đối tượng phương thức 
    3. Confirm : Tạo ra 1 box để xác nhận
    4. Prompt : kết hợp cả alert và confirm và có  thêm ô input
    5. Set timeout: đối tượng truyền vào là 1 function / Cho 1 đoạn code được chạy sau 1 khoảng thời gian và chỉ chạy được 1 lần / Giá trị thời gian là mili giây
    6. Set interval : Chạy 1 đoạn code sau 1 khoảng thời gian và lặp đi lặp lại

# Cú pháp Comments trong JS
## Mục đích sử dụng 
- Ghi chú
- Vô hiệu mã hóa : dùng comments
## Loại comments
- Comments 1 dòng
- Comments nhiều dòng
## Sử dụng phím tắt
- Windows: ctrl + /

# Kiểu dữ liệu trong Javascript
// Gồm có 6 kiểu:
- 0
- false
- '' - ""
- undefined
- NaN
- null
=> 6 kiểu giá trị này khi convert sang boolean sẽ là false còn khác là true
> 1. Kiểu dữ liệu nguyên thủy - Primitive Data
    - Number 
    - String : Được thể hiện bằng cặp '..' or ".."
    - Boolean
    - Undefined : Là 1 kiểu chỉ khai báo biến nhưng không gán bất cứ giá trị nào
    - Null
    - Symbol : Có 1 tham số truyền vào là description 
>> Notes: Cách hiện dấu nháy trong 1 cặp dấu nháy 
    EX: var fullName = 'Sang \'vu'
        console.log(fullName);  

    EX: 1 Trường hợp khác sẽ không bị lỗi (do hai dấu khác nhau nên sẽ không sinh ra lỗi)
        var fullName = "sang 'vu";
        console.log(fullName);


> 2. Kiểu dữ liệu phức tạp - Complex Data
    - Function
    - Object

>> Notes: 
>>> Object Sử dụng để lưu hầu hết các giá trị trong Javascript
>>> Object sử dụng để định nghĩa key
>>> Khi cần định nghĩa 1 danh sách thì dung Array (Array cũng là 1 phần thuộc Object) 

# Toán tử
1. Toán tử số học - Arithmetic
2. Toán tử gán - Assignment
3. Toán tử so sánh - Comparison
4. Toán tử logic - Logical

## Toán tử số học
 + -> cộng
 - -> trừ
 * -> nhân
 ** -> lũy thừa
 / -> chia
 % -> chia lấy số dư
 ++ -> tăng 1 giá trị số
 -- -> giảm 1 giá trị số

## Toán Tử gán
 Toán tử       Ví dụ          Tương đương
 =             x = y          x = y
 +=            x += y         x = x + y
 -=            x -= y         x = x - y
 *=            x *= y         x = x * y
 /=            x /= y         x = x / y
 **=           x **= y        x = x ** y

+= : nối thêm vào giá trị

>> x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
>> ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
>> x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
>> --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm

## Toán Tử ++ --
### Prefix & Postfix (Tiền tố và hậu tố)

## Toán tử chuỗi - String operator

## Toán tử so sánh
== : Bằng 
!= : không bằng
> : Lớn hơn
<: Bé hơn
>= : Lớn hơn hoặc bằng
<= : Nhỏ hơn hoặc bằng

> Luôn trả về 2 kết quả đúng hoặc sai
> =, != : luôn chỉ quan tâm tới value của biến

## Kiểm tra tính chất của từng giá trị
- Dùng typeof
--------------------------------------
## Toán tử so sánh - P2
=== : bằng
!== : không bằng

> Notes: === so sánh cả data type, cả kiểu dữ liệu (so sánh tuyệt đối)
> Note: !== so sánh tuyệt đối 


## Boolean
- two value : true or false
### Truthy & Falsy
> Truthy - to bool is true
- !! trong boolean. Toán tử ! là toán tử not(phủ định) nên !! là 2 lần phủ định sẽ trở thành "khẳng định"

- Thêm !! phía trước các giá trị truthy sẽ luôn trả về true

> Falsy - to bool is false
1. false
2. 0
3. '' or "" (chuỗi rỗng)
4. null
5. undefined
6. NaN

>> Notes: Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.

>> Notes: 6 giá trị đề cập tới Falsy thì all value khác đều là true. Kể cả giá trị sau:
1. '0' (Một chuỗi chứa số không)
2. ' ' (Một chuỗi chứa dấu cách)
3. 'false' (một chuỗi chứa từ khóa false)
4. [] (Một arry trống)
5. {} (một object trống)
6. function(){} (một hàm "trống)


## Toán tử logic
1. && - And
> Toán tử And nó sẽ đọc từ vế trái qua vế phải
> Nếu đọc từ trái qua mà không có giá trị nào nằm trong 6 giá trị trên thì sẽ tiếp tục đọc sang phải

2. || - Or
> Chỉ cần giá trị đầu khác 6 giá trị trên thì nó sẽ lấy luôn và bỏ qua các giá trị sau

> Nếu giá trị đầu nằm trong 6 giá trị trên thì nó sẽ bỏ qua giá trị đó và lấy giá trị tiếp theo

3. ! - Not


> Note: 
>> Với toán tử hoặc (||), nếu xuất hiện ít nhất 1 vế bằng true thì kết quả trả về sẽ là true.

>> Còn với toán tử và (&&), nếu xuất hiện ít nhất 1 vế bằng false thì kết quả trả về sẽ là false.

>> Câu lệnh điều kiện sử dụng toán tử so sánh thì trả về boolean 

>> Toán tử logic sẽ không trả về boolean, mà nó sẽ trả về kết quả của 1 trong 2 vế tùy thuộc vào trường hợp xảy ra 

-----------------------------------------------------------------------------
# Function
// Cách đặt tên hàm : a-z A-Z 0-9 _ $
// Không được đặt số ở đầu tiên
// 1 function chỉ làm 1 việc

> Toán tử call () : dùng để gọi hàm 

# Các loại function
1. Declaration function
> Đối với Df thì phải đặt tên cho function thì khi đó mới được gọi là function

2. Expression function
> Sẽ được gán cho 1 biến

3. Arrow function

## Tham số hàm - Javascript cơ bản
1. Tham số
    - Định nghĩa 
    > Là 1 giá trị có thể truyền vào khi gọi tới 1 function / tham số được sử dụng trong 1 function để tính toán hoặc xử lý dữ liệu

    - Kiểu dữ liệu
    > Không giới hạn kiểu dữ liệu

    - Tính private
    > 1 biến được sử dụng làm tham số ở trong 1 function sẽ có tính private(riêng tư)
    >> Ex: Chỉ sử dụng biến message ở trong cặp ngoặc nhọn của function này mà thôi
            function writeLog(message) {
                console.log(message);
            }
            writeLog('TEST);

    - 1 tham số
    > Ex: truyền vào 1 tham số 
            writeLog('TESt);

    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments
    - Đối tượng argument
    > Chỉ xuất hiện trong 1 function và nếu không ở trong function thì sẽ bị lỗi

    - Giới thiệu vòng for



// Tham số - Javascript cơ bản
function writeLog(message){
    console.log(message);
}

writeLog('text message');

>> Khi gọi tới function đó và truyền 1 giá trị vào thì đó sẽ là đối số

# Phương thức toString
- Chuyển các giá trị về kiểu chuỗi (main_1.js)

# Một số điều cần biết về function (main_1.js)
1. Khi function đặy trùng tên
> Khi định nghĩa ra 2 function trùng tên thì function định nghĩa sau sẽ ghi đè lên function trước

2. Khai báo biến trong hàm
> 1 biến được định nghĩa trong 1 function thì phạm vi sử dụng chỉ trong function đó

3. Định nghĩa hàm trong hàm
> Phạm vi sử dụng trong function được định nghĩa - có tính chất private
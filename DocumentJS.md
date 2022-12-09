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
2. || - Or
3. ! - Not

> Note: 
>> Với toán tử hoặc (||), nếu xuất hiện ít nhất 1 vế bằng true thì kết quả trả về sẽ là true.

>> Còn với toán tử và (&&), nếu xuất hiện ít nhất 1 vế bằng false thì kết quả trả về sẽ là false.

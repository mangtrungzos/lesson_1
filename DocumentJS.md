# Từ khóa khai báo biến in JS
- var tên biến
- Tên biến có phân biệt hoa và thường chữ và số
- Viết code có dấu ';' có thể viết được trên cùng 1 dòng
- variable: biến
1. alert : tại 1 thời điểm thì chỉ hiển thị 1 biến mà thôi

# Một số hàm built-in (built-in function)
    1. Alert : Tạo ra 1 bảng  thông báo
    2. Console : đối tượng phương thức 
    3. Confirm : Tạo ra 1 box để xác nhận
    4. Prompt : kết hợp cả alert và confirm và có  thêm ô input
    5. Set timeout: đối tượng truyền vào là 1 function / Cho 1 đoạn code được chạy sau 1 khoảng thời gian và chỉ chạy được 1 lần / Giá trị thời gian là mili giây
> 3s = 3000 mls
    6. Set interval : Chạy 1 đoạn code sau 1 khoảng thời gian và lặp đi lặp lại

# Cú pháp Comments trong JS
\\ lỗi về cú pháp : SyntaxError
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
    - Function : f{}
>> Hàm được được truyền vào dưới dạng tham số được hiểu là callback
    - Object : {}

>> Notes: 
>>> function(): để chạy 1 function sẽ phải sử dụng toán tử call()
>>> Object Sử dụng để lưu hầu hết các giá trị trong Javascript
>>> Object sử dụng để định nghĩa key
>>> key của object bị trùng thì nó sẽ lấy key được định nghĩa sau / Hàm cũng tượng tự
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

## Kiểm tra kiểu dữ liệu của từng giá trị
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
\\ Cách đặt tên hàm : a-z A-Z 0-9 _ $
\\ Không được đặt số ở đầu tiên
\\ 1 function chỉ làm 1 việc
\\ 1 function không được định nghĩa -> undefined 

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
            writeLog('TESt');

    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments
    - Đối tượng argument
    > Chỉ xuất hiện trong 1 function và nếu không ở trong function thì sẽ bị lỗi
    > syntax: argument.length (kiểm tra xem có truyền đối số không)
    - Giới thiệu vòng for



\\ Tham số - Javascript cơ bản
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

# CHUỖI TRONG JAVASCRIPT (main_1.js)
1. Tạo chuỗi
    - Cách tạo
    - Dùng cách nào? Lý do
    - Kiểm tra data type

2. Một số case sử dụng backslash (\)
   \\ Hai dấu gạch chéo ngược '\\' sẽ in ra 1 dấu \

3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
\\ 1 dòng code đối đa 80 ký tự 
5. Template string ES6
\\ `${....}`

# LÀM VIỆC VỚI CHUỖI (main_1.js)

\\ Keyword : Javascript string methods
> Tìm hiểu thêm về các phươn thức trong JS
> Thứ tự của 1 chuỗi bắt đầu bằng 0 

\\ 1. Length

\\ 2. Find index
> index: chỉ mục
> Tìm vị trí của kí tự trong 1 chuỗi
> Trả về -1 là k tìm thấy
> Phương thức search giúp tìm kiếm theo biểu thức chính quy
> indexOf : trả về vị trí xuất hiện đầu tiên của 1 giá trị trong chuỗi

\\ 3. Cut string
> Cắt chuỗi slice
> Cắt từ phải sang trái thì đếm ngược lại bắt đầu từ 0 -> -1,....

\\ 4. Replace
> Ghi đè

\\ 5. Convert to upper case
\\ 6. Convert to lower case
\\ 7. Trim
> Rất có ích trong việc xử lí dữ liệu nhập vào của người dùng
> Giúp loại bỏ khoảng trắng thừa của chuỗi mà người dùng nhập vào

\\ 8. Split
> Cắt 1 chuỗi thành 1 array và chỉ cần tìm ra 1 điểm chung của chuỗi đó mà thôi

\\ 9. Get a character by index
> Lấy 1 kí tự bởi 1 cái index cho trước


# Kiểu số number(main_1.js) / Keyword: Javascript Number Methods
\\ NaN : Đại dien cho 1 kiểu số không hợp lệ
> Cách kiểm tra 1 biến NaN : isNaN
    Ex: 
        var result = 20 / 'abc'
        console.log(isNaN(result))
\\ Khi console.log bên web thì sẽ là màu xanh đối với number / chuỗi sẽ màu đen

\\ ToFixed
> Với giá trị thập phân nhỏ hơn 5 thì làm tròn bằng chính số đó
    var PI = 3.14;
    console.log(PI.toiFixed())  -> 3
> Với giá trị thập phân lớn hơn or bằng 5 thì làm tròn
    var PI = 3.5;
    console.log(PI.toFixed()) -> 4
\\ typeof
\\ Hàm Kiểm tra số
    function isNumber(value){
        if(typeof value === 'number'){
            return true;
        } else {
            return false;
        }
    }


# Phương thức đẩy() của mảng trong Javascript / 
> Dùng để thêm 1 or nhiều nhiều giá trị vào cuối mảng / Phương thức này thay đổi độ dài của mảng bằng số phần tử được thêm vào mảng.
\\ Syntax: 
    arr.push(element0, element1, ... , elementN)
# Mảng trong Javascript (main.js) / Keyword : Javascript array methods
> Chứa được tất cả kiểu dữ liệu trong JS
> typeof của 1 Array là 1 object
> Cách kiểm tra có phải Array hay không: Array.isArray()
> index trong mảng là vị trí của elements tự động tăng

\\ Cách lấy phần tử của mảng

\\ Example: 
    const cars = ["Saab", "Volve", "BMW"];  
    let x = cars[1]; -> Lấy ra Volve

\\ Example: Lấy ra chiều dài của mảng
    const cars ["Volvo", "Jeep", "Mercedes"];
    alert(cars.length);
## Làm việc với Array
 1. To string 
 > chuyển kiểu dữ kiệu 'Array' sang 'String'
 > Khi chuyển từ Array sang String thì mặc định có dấu phấy ngăn cách

 2. Join
 > Chuyển từ mảng sang chuỗi nhưng có thể tự ghi dấu ngăn cách

 3. Pop
 > Xóa đi phần tử cuối mảng và trả lại phần tử mà nó đã xóa
 > Khi console.log thêm 1 lần nữa thì chỉ còn những phần tử còn lại in Array
 4. Push
 > Thêm phần tử ở cuối mảng và chả về độ dài của mảng

 5. Shift
 > Xóa đi 1 phần tử ở đầu mảng và trả lại phần tử đã xóa
 > Khi xóa hết phần tử sẽ giá trị trả về sẽ là undefined

 6. Unshift
 > Thêm 1 hoặc nhiều phần tử ở đầu mảng và trả về độ dài của mảng

 7. Splicing
 > Xóa 1 elements bất kì trong Array

 8. Concat
> Nối 2 Array với nhau

 9. Slicing 
 > Sử dụng để cắt 1 vài elements của mảng

## Các phương thức trong mảng (main_1.js)
> Array methods

    forEach()
> forEach không có return
> Khi xây dựng forEach dùng for in
>> Sử dụng để duyệt qua được phần tử của mảng
    every()
> Kiểm tra tất cả elements trong mảng / tất cả các elements phải thỏa mãn điều kiện đưa ra thì mới return true
> Khi gặp 1 elements false thì sẽ dùng vòng lặp tại thời điểm đó
>> Áp dụng cho Exercise kiểm tra các phần tử thuộc mảng phải thỏa mãn 1 điều kiện nào đó
>> Kết quả trả về: boolean giúp kiểm trả đúng sai
    some()
> Kiểm tra tối thiểu 1 phần tử trong mảng có thuộc điều kiện không
> Chỉ cần 1 phần tử trong mảng thoa mãn điều kiện thì sẽ trả về true và ngừng lại vòng lặp / sự kiểm tra khi gặp kết quả đúng
    find()
> Tìm kiếm trong Array phần tử cần tìm, nếu có thì find method sẽ trả về đúng phần tử đó
> Sẽ trả về chính elements thỏa mãn điều kiện đầu tiên tìm được
> Thực hiện cho đến khi có giá trị đầu tiên thỏa mãn và trả về true
> Nếu không có => undefined
    filter()
> Giống find() / nhưng sẽ trả về tất cả phần tử thỏa mãn điều kiện
> Khác find() ở điểm là sẽ tìm kiếm qua 1 danh sach 
    map()
> Cho phép lặp qua các phần tử của mảng
> Duyệt qua 1 mảng
> Cho phép xử lí giá trị của mảng đó và trả về 1 mảng mới
> Sử dụng khi muốn chỉnh sửa hay thay đổi những elements của 1 array
> originArray: trả về array gốc
    reduce()
> Muốn nhận về 1 giá trị duy nhất sau khi tính toán, xử lý 1 Arr
> Truyền vào 2 đối số: hàm trả về và giá trị khởi tạo / Tùy vào bài toán mà giá trị khởi tạo sẽ khác nhau
> Khi không có initial value thì sẽ lấy giá trị đầu tiên của mảng làm initial value / Sẽ giảm đi 1 lần chạy
\\ Không phải bài toán nào cũng bỏ đi được initial value

> Reduce nhận 2 đối số : 1. là callback(hàm gọi lại), 2. giá trị khởi tạo

# Object(main_3.js)
// Sử dụng trong việc lưu trữ thông tin của 1 đối tượng cụ thể

>> Cách khai báo 
    Ex: var myInfo = {key value ...};
        var myInfo = {
            'my-name': 'Sang vu',
            age: 20,
            addess: 'Ba Ria Vung Tau'
        };

> Cách thêm key & value sau khi Object được tạo
    myInfo.email = 'sangv906@gmail.com';

> Muốn đặt key vi phạm quy tắc đặt tên
    myInfo.['my-email'] = 'sangv906@gmail.com';

> Lấy value ra ngoài (Phải biết key)
    console.log(myInfo.name);
    console.log(myInfo['name']);

> get a key by ariable (note: Don't use string)
    var myKey = 'address';
    console.log(myInfo[myKey]);

> Add a new key by variable 
    var emailKey = 'email';

    var myInfo = {
        name: '...',
        age: ...,
        [emailKey]: '0328trongsang@gmail.com'
    }

> Key là 1 function
    var myInfo = {
        name: 'sang vu',
        age: 20,
        [emailKey]: '0328trongsang@gmail.com',
        getName: function() {
            return this.name;
        }
    };
>> this ở đây được hiểu là myInfo (Bởi khi có nhiều hàm như trên trong 1 object mà nếu sử dụng "myInfo" thay vì "this" thì khi sửa tên sẽ rắc rối)


# Object
\\ Muốn biến 1 biến thành 1 đối tượng thì thêm từ khóa 'new'
# Object constructor (Xây dựng đối tượng) (OConstructor)\
\\ Để cấu tạo nên 1 đối tượng cần : thuộc tính và phương thức
\\ Khi các đối tượng được tạo ra từ 1 bản thiết kế thì nó đều có cấu trúc giống nhau
\\ Object constructor là bản thiết kế của ngôi nhà
>> Object constructor : thuộc tính phải được định nghĩa ở bên trong hàm tạo

> Viết hoa chữ cái đầu của tên object constructor (quy ước chung)

\\ String, Number, Array, Date là những Object constructor

## Constructor function
\\ Là một khuôn mẫu giúp tạo ra 1 bản thiết kế cho 1 đối tượng

# Object prototype - Basic (Nguyên mẫu của Object - Nguyên mẫu để tạo nên 1 đối tượng)
\\ Định nghĩa 1 phương thức cho 1 array constructor và khi array cons có những phương thức nào thì đối tượng được khởi tạo từ nó sẽ được thừa hưởng lại những phương thức này
\\ Object prototype là nguyên liệu để tạo nên ngôi nhà
\\ Object prototype giúp có thể thêm 1 thuộc tính ở bên ngoài
> Tất cả attribute & method được thêm bằng Prototype qua 1 hàm tạo nằm trong proto & khi nằm trong proto thì đối tượng được tạo ra là user vẫn có thể sử dụng được dấu chấm 'user.className' để truy cập tới thuộc tính và phương thức đó
> Tính chất của Prototype: thì sẽ thêm vào đối tượng được tạo ra
EX: 
    function User(){
        ...
    }
    User.prototype.className = 'F8';
    var user = new User('Sang', 'Vũ', 'Avatar');
    var user2 = new User('Vũ', 'Sang', 'Avatar 2');

    console.log(user.className);
    console.log(user2.className);
>> Two object (user, user2) đều được tạo ra từ Object constructor nên cả 2 đối tượng đều có thuộc tính className

>> Có thể add attribute(thêm ở bên ngoài) sau khi hàm tạo được tạo ra


# Đối tượng Date (Date.js)
> Nguồn tài liệu: Javascript date object mozilla (developer.mozilla.org)
\\ Sử dụng để làm việc với các giá trị thời gian trong Javascript


# Math Object
\\ Note: math Object is not Oject constructor
\\ Được sử dụng để truy xuất những thuộc tính và phương thức qua dấu chấm '.'
- Math.PI -> trả về số PI
- Math.round() -> Làm tròn số thập phân (Tùy vào điểm đầu hay điểm cuối sẽ làm tròn trên or dưới)
- Math.abs()  -> (Absolute) Trả về giá trị tuyệt đối / Có thể biến số âm thành số dương
- Math.cell() -> Làm tròn trên
- Math.floor() -> Làm tròn dưới
- Math.random() -> Trả về 1 dãy số thập phân nhỏ hơn 1 / a number from 0 to <1
>> Dùng để tạo ra 1 dãy số ngẫu nhiên cho 1 khoảng cho trước

- Math.min()
- Math.max()
- Math.sqrt() \\  Math method to get the square root
>> Tất cả số truyền vào min max đều ở dạng đối số

# Câu lệnh rẽ nhánh If else - Toán tử 3 ngôi (If/else - main.js)
\\ Note: Chỉ cần 1 điều kiện đúng thì sẽ thực hiện câu lệnh trong điều kiện đó và bỏ qua các điều kiện còn lại.

Ex: return value ? undefined : 'error'

> Toán tử chia hết dùng : %

# Câu lệnh rẽ nhánh -  Switch (If/else - main.js)
\\ case: trường hợp

\\ Truyền 1 giá trị cho switch: có thể là 1 biến, 1 chuỗi, 1 dạng số or 1 toán tử, 1 biểu thức điều kiện - sau đó switch sẽ tính toán để lấy ra giá trị mà đối tượng truyền vào 

>> Note sử dụng break: tính từ case đúng nó sẽ lọt vào tất cả các case còn lại nên phải sử dụng break để thoát switch

\\ Giá trị vượt quá khoảng 2 -> 8 ta sử dụng default
\\ Ít hơn 3 case sử dụng if / else

# Toán tử 3 ngôi (If/else - main.js)
\\ ternary operator


# Vòng lặp for - loop (main.js)

\\ for/in - Lặp qua key của đối tượng
> Sử dụng vòng lặp để lấy ra key của đối tượng
> key: Có thể là array, string, object
> key của array là số
> key của object là chuỗi

## For_Of(main.js)
\\ for/of - Lặp qua value của từng đối tượng 
> Đối tượng: Có thể là array, string

\\ 1 vòng lặp vô hạn làm cho trình duyệt bị treo
\\ Ví dụ như điều kiện luôn luôn đúng thì nó vẫn sẽ tiếp tục chạy
\\ Quên i++ sẽ gây treo trình duyệt (vong lap chay vo han)

## While - do/while(main.js)
> Điểm khác biệt của do/while với For/in/of
\\ Kiểm tra điều kiện từ lần lặp thứ 2 trở đi
\\ Lần đầu tiên lặp sẽ không cần kiểm tra điều kiện mà in ra giá trị ở trong do và sau đó từ lần thứ 2 trở đi mới xét điều kiện.

## Break & Continue in loop 
> Có thể sử dụng trong tất cả các loại vòng lặp 
> Break : muốn thoát khỏi vòng lặp
> Continue : muốn bỏ qua 1 vài lần lặp của vòng lặp

# Vòng lặp lồng nhau (Nested loop)

# Đệ quy
\\ Đặc tính của đối tượng Set là những element của nó là unique chỉ tồn tại 1 mà thôi
> Lỗi trong đệ quy
\\ Maximum call stack size exceeded
> Cứ không phải điểm dừng là có logic handle

# Includes method
> Đây là phương thức tồn tại săn trong prototype của 2 đối tượng: String, Array
\\ Dối với chuỗi dùng kiểm tra xem trong chuỗi có chứa 1 từ gì đó không hoặc 1 cụm từ 

---------------------------------------------------------

# Callback
> Là hàm (function) được truyền qua đối số 
> Dùng để xử lí những thao tác bất đồng bộ
# Empty elements of array (Các phần tử rỗng của mảng)

--------------------------------------------------------

# HTML DOM (Document Object Model) 
> Quy chuẩn của W3C đưa ra
> HTML DOM dựa trên Core DOM để define ra các tiêu chuẩn, thành phần cho trang web
> Là Mô hình tài liệu được thể hiện dưới dạng đối tượng
> Chuỗi html sẽ được trình duyệt đọc và tạo ra 1 mô hình từ chuỗi html


> Có 3 thành phần
1. Element: thẻ tag <> trong file html
2. Attribute: Những thuộc tính nằm trong thẻ tag
> VD: <h1 class="" id="" title=""></h1> 
>> Thì class, id, title,... là thuộc tính
3. Text

\\ Node: Là những điểm giao nhau trên 1 sơ đồ  
\\ Những điểm giao nhau, gồ lên có thể là elements, attribute, text => Đều có thể gọi là 1 node 

\\ DOM chỉ là 1 WEB API

## Document in DOM
- Đại diện cho cả website 
\\ Khi muốn truy cập đến Elements, Attribute, Text -> Đều thông qua Documents
\\ Có 3 node chính : Element, Attribute, Text
\\ Node Attribute, Text sẽ được lấy ra từ node element
## những cách get elements
> ID, class, tag, CSS selector, HTML collection
\\ Khi select 1 elements mà trả về null là do viết sai heading id hoặc đặt trùng tên id -> nên các elements sau k lấy được -> return null

\\ CSS selector input tag 
    Ex: 
        input[name="gender"];
        input[type="text"];
# input tag
\\ name là attribute hợp lệ của thẻ input
\\ Đối với những thẻ không hợp lệ trong thể input ta sẽ sử dụng 
    getAttribute('...') -> Lấy ra thuộc tính của nó

> Muốn truy cập vào từng elements trong HTML collection phải dùng vòng lặp
>> HTML collection tính chất giống mảng (khác ở chỗ không có các methods the same of array)

> nodeList coi như array / dùng vòng lặp để lặp qua
>> nodeList === HTML collection

------------
\\ Khi select form thì không cần phải selec qua ID
> console.log(document.forms);

\\ Những thẻ được quy vào HTML collection: a, image, forms,...
- document.anchors : Lấy ra thẻ a
\\ Attribute nằm trong thẻ tag
\\ Trong DOM 1 thẻ tag là 1 element

>> getElementById(): Trả về trực tiếp element
>> querySelector(): Trả về trực tiếp element
>> getElementsbyClassName()

>> getElementsByTagName() : Không trả về trực tiếp element / Return HTML Collection
>> querySelectorAll() : Không trả về trực tiếp element | Trả về là 1 node list (1 vài trường hợp dùng vòng lặp)
--------------------
> Nodelist and HTML collection có tính chất giống mảng nên có thể sử dụng vòng lặp để lấy ra element
> Nodelist không có phương thức của Array như: reduce(), map(), forEach()

- document.links: trả về 1 HTML collection
## document.write
- Ngay sau khi được thực thi thì sẽ in ra giá trị truyền vào
- Nếu ghi sau khi DOM được tải xong thì lúc đó nó sẽ overwrite(ghi đè) lại tất cả nội dụng body

## Note
// 1. Element node : Là h1
// 2. Attribute node : Là id, class, title
// 3. Text node : Là heading (Phần nội dung của h1)

//<h1 id="heading" class="heading" title="heading">heading</h1>

## DOM attributes (mains.js)
\\ Có 2 cách để truy xuất vào attributes:
> 1. Truy xuất trực tiếp qua thuộc tính
> 2. Truy xuất qua phương thức / Truyền đối số cho hàm

\\ Thêm thuộc tính vào thẻ tag

var headingElement = document.querySelector('h1');

\\ headingElement.title = 'heading'; \\ add title = 'heading' in h1

\\ headingElement.className = 'heading'

> Attributes được thêm vào ở HTML hay được thêm vào bởi JS thì đều vào đối tượng DOM / Nếu ELement tồn tại trong DOM rồi, lúc đó đều get được Attributes ra

## Text node (mains.js)
\\ innerText, textContent
> innerText là thuộc tính của element node
> textContext là tồn tại trên cả element node & text node

\\ textContent: Lấy nội dung thực sự nằm trong text node | Cả đoạn mã JS
\\ innerText: Chỉ hiện thị những gì nhìn thấy trên giao diện web

> Khi nằm trong DOM nó đã là 1 thẻ tag thì nó vẫn chỉ là 1 element node và nó đã là nội dung text nằm trong thẻ tag thì sẽ luôn là 1 text node

## innerHTML | outerHTML
- Cách thêm 1 element vào 1 element
- Hai thuộc tính của element node

\\ innerHTML
- Thêm trực tiếp vào dưới dạng là một Element node
> Add an Element to an Element | an text node to an Element | an attribute to an ELement 
    
    boxElement.innerHTML = '<h1>boxHeading</h1>';
    \\ Nếu bỏ thẻ tag đi thì nó chỉ hiểu đây là text node

> Sử dụng dưới dạng geter / Lấy nội dụng HTML bên trong element của chúng ta ra / Lấy ra và quy thành dạng chuỗi

    console.log(boxElement.innerHTML); // geter

\\ outerHTML
- Ghi đè Element
> Return tag box | vẫn còn là do còn trong bộ nhớ | do get ra từ querySelector | Trong DOM thật không còn nữa
    boxElement.outerHTML = '<span>Test</span>'; // Ghi đè thẻ box

    console.log(boxElement) // <div class="box"></div> | Do vẫn còn trong bộ nhớ 


# Node properties
\\ clientHeight | clientWidth 
- Chiều cao, rộng của element
\\ Attributes node
- contenteditable="" : Sửa text như trong thẻ input

# DOM CSS
- Style object
> Object.assign(..., {}) 

# ClassList Property
- Một thuộc tính của element node
- Chỉ truy cập vào thuộc tính khi đang lấy ra được element node
- DomTokenList : được lấy ra từ element

\\ add
- Thêm class vào element  

\\ contains
- Kiểm tra 1 class có nằm trong element hay không

\\ remove
- Xóa bỏ 1 class ở element

\\ toggle
- Nếu có 1 class trong element thì khi gọi phương thức toggle thì nó sẽ xóa bỏ class đó | Còn không có class ở element thì toggle sẽ thêm vào


# DOM events
- Là những sự kiện diễn ra trong quá trình người dùng tương tác
- Xác định hành vi người dùng để viết ra mã bắt được sự kiện 
- Bên trong DOM diễn ra rất nhiều sự kiện liên quan đến trình duyệt

- DOM event gán 1 function() và viết các công việc muốn thực hiện trong 1 công việc

> Sử dụng DOM event trong những case(TH): muốn lắng nghe 1 sự kiện nào đó và không có nhu cầu muốn gỡ bỏ nó đi 

\\ 1. Attribute events
- Cách sử dụng để lắng nghe sự kiện diễn ra, những hành vi của người dùng

\\ 2. Assign event using the element node
- Gán sự kiện bằng element node

> note: Để có thể sử dụng cách 1 hoặc cách 2 thì phải xác định tên events diễn ra
- VD: Khi click vào thẻ thì tên sự kiện là click

> syntax: on...
- VD: onlick

> this: chính là node element

> Sự kiện nổi bọt: Khi click vào 1 element con của 1 element(cha) đang lắng nghe một sự kiện thì sẽ lắng nghe hành động của thẻ con trước sau đó nổi bọt ra ngoài (đến thẻ cha của nó vẫn sẽ bị ảnh hưởng) 

## target
> target trả lại chính element đang lắng nghe DOM events

\\ Lấy ra giá trị của element 
- e.target.value

## get value
- Lấy value của element thông qua oninput & onchange

\\ onkeyup: nhấn phím và sau đó nhấc lên
\\ onkeydown: nhấn phím xuống
\\ onkeypress: nhấn và giữ

- console.log(e.which) // MÃ CODE CỦA PHÍM

## Two methods of DOM events (main.js)
\\ 1. preventDefault
- Dùng để loại bỏ hành vi mặc định của trình duyệt trên thẻ HTML
    Ex:
        e.preventDefault();

\\ 2. stopPropagation
- Loại bỏ được sự kiện nổi bọt


# Event listener
- Là một phương pháp giúp lắng nghe được những event trong DOM xảy ra (cũng tương tự DOM event) 
> Muốn xử lý nhiều việc khi 1 event xảy ra thì vẫn có thể sử dung DOM event(Viết chung vào 1 phương thức) 

> Especialy: Khi 1 sự kiện diễn ra và muốn hủy bỏ lắng nghe sự kiện đó trong 1 case nào đó / thì sử dụng Event Listener

> Truyền vào 2 đối số: event name, callback function

\\ Lắng nghe: Gọi đến addEventListener
\\ Hủy bỏ lắng nghe: removeEventListener

> Mỗi 1 function là 1 event listener

------------------------------------------------------------------------------------

# JSON - JavaScript Object Notation
\\ Là một định dạng (format) dữ liệu (chuỗi) 
> Không phải là một kiểu dữ liệu
> Viết theo đúng cú pháp thì đó là JSON

\\ Là một định dạng dữ liệu được thể hiện dưới dạng chuỗi 
> Nên không bị gắn chặt với language này

\\ Trong bất kì ngôn ngữ nào cũng sử dụng được

\\ JSON: Number,String, Boolean, Null, Array, Object
> JSON được thể hiện dưới những dạng dữ liệu này

\\ Mã hóa / Giải mã 
\\ Encode / decode  
\\ Stringify: Từ JavaScript types -> JSON
\\ Parse: Từ JSON -> JavaSript types

> Thể hiện kiểu dữ liệu dạng chuỗi dùng : "" 

# Promise
- JavaScript là ngôn ngữ đồng bộ / thao tác xử lí là bất đồng bộ / ngôn ngữ đơn luồng
> Promise sinh ra để giải quyết vấn đề trong quá trình lập trình "bất đồng bộ"

\\ Sync (Đồng bộ)
- Thằng nào viết trước chạy trước
- Chạy theo luồng tuần tự
\\ Async (Bất đồng bộ)

\\ Lý thuyết, cách hoạt động

> Những thao tác bất đồng bộ
\\ setTimeout, setInterval, fetch, xmlHttpRequest, file reading
\\ request animation frame
>> sử dụng callback để xử lí những thao tác bất đồng bộ

## Promise(pain)
\\ Callback hell -> Tập trung vào vấn đề khi sử dụng callback
\\ Pyramid of doom -> Tổng quan khi viết code

## Promise(concept)
> Create a Promise
\\ Khi gọi new Promise thì khi đó sẽ ngay lập tức gọi đến 1 func Excutor
\\ Và sẽ gọi tới func trước cả khi nhận được tại đối tượng promise

> 2 bước tạo Promise
\\ 1. new Promise
\\ 2. Excutor
- Trong Excutor phải gọi 1 trong 2 resolve() / reject()
- Nếu không gọi thì Promise sẽ ở trạng thái treo(không thành công or thất bại)
>> sẽ sinh ra lỗi memory leak 'Rò rỉ bộ nhớ' / Lãng phí bộ nhớ

> Trạng thái pendding (chờ): chờ việc thành công hay thất bại / Khi k resolve, reject thì sẽ ở trạng thái pendding ==> Gây rò rỉ bộ nhớ

## lỗi trong Promise 
> Uncaught (in promise) -> Promise không sử dụng catch(không bắt lỗi)

## Promise(chain)
- Tính chất chuỗi
\\ Khi resolve xong / sẽ thực thi callback của .then đầu tiên -> .then thứ hai, sau khi thực thi xong -> .then thứ 3 
> Thực thi theo tính chất chuỗi từng phương thức 1 

promise 
    .then(() => {
        console.log(1); 
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    })

\\ => result : 1 2 3
\\ Callback thứ nhất return cái gì thì ở ta sẽ nhận được value đó ở callback thứ hai
>> Kết quả trả về của func đầu tiên lại là tham số đầu vào của func tiếp theo

> Trong .then return là trả về 1 promise
> Trường hợp 'return' về 1 promise

promise
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(resolve, 3000);
        });
    })
    .then(function(data){
        console.log(data);
    })

\\ .then kế tiếp sẽ phải chờ promise phía trước được giải quyết thì sau đó mới lọt vào .then kế tiếp

> Không phụ thuộc nhau thì hãy chạy song song và đồng thời

## Promise Ex(promiseEX.js)
\\ promise hell -> bị phụ thuộc nhau quá nhiều

# Ứng dụng thực tế của Promise(app.js)

## Fetch (app.js)
> Gọi ra APi để lấy ra nội dung được lưu trữ ở phía Back-end / Front-end nhận nội dụng đó và render ra trình duyệt

> REST API: 1 tiêu chuẩn / hành động dựa trên phương thức của HTTP Protocol
\\ API (URL) - Application programming interface
\\ Cổng giao tiếp giữa các phần mềm

\\ JSON server: API Server (Fake) / Mock API
\\ CRUD: 4 hành động để thao tác với API
    - Create: Tạo mới -> POST
    - Read:: Lấy dữ liệu -> GET
    - Update: Chỉnh sửa -> PUT / PATCH
    - Delete: Xóa -> DELETE
\\ Postman:


# Form Validation
\\ The way get value 
    Ex: 
    console.log(inputElement.value)

## trim()
\\ Remove all spaces in context when typing.
    Ex: 
    return value.trim() ? undefined : 'Please type'

# Syntax Array - Cú pháp kiểm tra mảng (Validator.js)
\\ Array.isArray(...)
    Ex:
        if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push[rule.test];
        } else {
            selectorRules[rule.selector] = [rule.test];
        }

# Convert 1 biến thành dạng boolean
\\ !! boolean

    Ex:
        return !!errorMessage;

# Convert Nodelist to array
\\ Array.from()
    Ex: 
        var formValues = Array.from(enableInputs);
        
# Toán tử logic và Câu lệnh điều kiện 

# Fix bug project FormValidation - Checked
    var enableInput = formElement.querySelectorAll('[name]');
    var formValues = Array.from(enableInput).reduce((values, input) => {
        return (values[input.name] = input.value) && values;
    }, {});

    Ex: 
        Giả sử chúng ta có mảng enableInput chứa hai đối tượng input:
        var enableInput = [
            { name: "username", value: "JohnDoe" },
            { name: "email", value: "john@example.com" }
        ];

        Lần lặp đầu tiên:
            input: { name: "username", value: "JohnDoe" }
            values: {}
            Thực hiện: values["username"] = "JohnDoe"
            Giá trị trả về: values trở thành { username: "JohnDoe" }

        Lần lặp thứ hai:
            input: { name: "email", value: "john@example.com" }
            values: { username: "JohnDoe" }
            Thực hiện: values["email"] = "john@example.com"
            Giá trị trả về: values trở thành { username: "JohnDoe", email: "john@example.com" }
        
        Results:
            {
                username: "JohnDoe",
                email: "john@example.com"
            }

// fix bug checkbox (checkbox sau khi thêm 
    if(!input.checked){
        values[input.name] = '' 
    } thì data sẽ trả về rỗng nếu các bạn không chọn option cuối cùng):   case 'checkbox':
            if(!input.checked){ 
            return values }
                if(!values[input.name]){
                values[input.name] = ''
                }
                if(!Array.isArray(values[input.name])){
                    values[input.name] = []
                } 
                values[input.name].push(input.value)
                break 

/** Nguyên nhân bị bug:
Đây là 1 vòng lặp, lặp qua 1 mảng có 3 options và sẽ dừng ở option cuối. 
1. Khi lặp qua 2 option đầu, trình duyệt kiểm tra 2 options có được check không và
gán thành công gía trị của option được check vào mảng.
2. Ở lần lặp cuối, trình duyệt kiểm tra phần tử cuối có được check không. 
 2.1 Nếu được check: trình duyệt đã thêm tất cả các options được check vào mảng.
 2.2 nếu options cuối chưa được check: trình duyệt sẽ gán chuỗi rỗng vào 
    values[input.name] (đúng theo code: if(!input.checked){
                            values[input.name]= ''}) 
3. Ở đây mình sẽ kiểm tra xem values[input.name] có tồn tại không, nếu đã lặp qua 3 
options mà không có giá trị thì mình sẽ gán cho nó 1 chuỗi rỗng.

// Tương tự ta có thể dùng code này để viết luôn cho phần radio
// mà không phải get name: 

case 'radio':
            if(input.checked){
                values[input.name] = input.value
            }
            if(!values[input.name]){
                values[input.name] = ''
            }
            break
// Dưới đây là cách code xuôi của phần checkbox mang tính tham khảo: 
    case 'checkbox':
         if(input.checked){
                if(Array.isArray(values[input.name])){
                    values[input.name].push(input.value)
                } else {
                    values[input.name] = [input.value] 
                }
        } 
        if(!values[input.name]){
            values[input.name] = ''
        }
        break;

# Phân tích cách triển khai logic
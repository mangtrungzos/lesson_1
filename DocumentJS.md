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
    const cars = ["Saab", "Volvo", "BMW"];  
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
> Nếu không có => undefined
    filter()
> Giống find() / nhưng sẽ trả về tất cả phần tử thỏa mãn điều kiện
> Khác find() ở điểm là sẽ tìm kiếm qua 1 danh sach
    map()
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

# Empty elements of array (Các phần tử rỗng của mảng)

--------------------------------------------------------

# HTML DOM (Document Object Model) 
> Quy chuẩn của W3C đưa ra
> HTML DOM dựa trên Core DOM để define ra các tiêu chuẩn, thành phần cho trang web
> Mô hình tài liệu được thể hiện dưới dạng đối tượng
> Chuỗi html sẽ được trình duyệt đọc và tạo ra 1 mô hình từ chuỗi html

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
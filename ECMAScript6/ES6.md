# 1. Let, const
# 2. Template Literals
# 3. Multiline Template
# 4. Arrow functions
# 5. CLasses
# 6. Default parameters values
# 7. Destructuring
# 8. Rest parameters
# 9. Spread
# 10. Enhanced object literals
# 11. Tagged template literals
# 12. Modules


\\ Differences
## 1. Var / Let, Const: Scope, Hosting(đưa lên)
> Khác nhau ở phạm vi truy cập trong khi let, const chỉ truy cập được khi trong 1 khối code

> Var có thể truy cập ngoài phạm vi của nó (code block) / Let, const ngược lại

> Let, Const không có hỗ trợ hosting

## 2. Const / Var, Let: Assignment(gán lại)
> Không thể sử dụng toán tử gán thứ 2 cho biến là const

\\ Code block: if else, loop, {}, ...

\\ Code thuần: Var
\\ Babel: Const, Let
\\ Khi định nghĩa biến và không gán lại biến đó: const
\\ Khi gán lại giá trị cho biến: Let

let isSuccess = false;

if (...) {
    isSuccess = true;
}


# 2. Template strings
\\ 1\n : in ra hai dòng

# 4. Arrow functions

\\ const sum = (a, b) => a + b;
> viết đằng sau dấu => : được hiểu là sẽ return biểu thức đó

\\ Return lại 1 object
   const sum = (a, b) => ({a: a, b: b});

> Arrow function chỉ có duy nhất 1 tham số nhận thì có thể bỏ đi ()
    const logger = log => console.log(log);

> Arrow function không được sử dụng làm function constructor
    const Course = (name, price) => {
        this.name = name;
        this.price = price;
    }   

    const jsCourse = new Course('Javascript', 100);

> Arrow function không dùng được cho declaration function

# CLasses in ES6
\\ Có Phương thức constructor 

# Default parameter values
\\ Sử dụng đối với những hàm có tham số không bắt buộc phải nhập

> những tham số đặt kiểu is (isAlert,...) thì mặc định là kiểu false, true

# Enhanced Object Literals
\\ 1. Định nghĩa key: value for object
\\ 2. Định nghĩa method cho object
\\ 3. Định nghĩa key cho object dưới dạng biến

> Tùy vào giá trị của biến lấy ra một giá trị của value tương ứng của object 
    var fieldName = 'name';
    var fieldPrice = 'price';

    const courses = {
        [fieldName]: 'PHP',
        [fieldPrice]: 1000
    };

# Destructuring ( phân rã )
\\ Use with Object & Array

\\ Get elements in array
>> Get all elements in array
    var array = ['Js', 'PHP', 'Python'];

    var [a, b, c] = array 
    console.log(a, b, c); => get all elements in array

>> Just get first & last elements in array

    var array = ['Js', 'PHP', 'Python'];

    var [a, , c] = array;
    console.log(a, c); => get two elements

# Rest parameters (...) ( Lấy ra những phần còn lại )
> syntax: ...rest : Rest parameter

> Sử dụng với Destructoring

> Sử dụng trong việc định nghĩa ra tham số
EX:
    var array = [];
    function logger(...rest) {

    }
    logger(...array);

    var arrays = ['JS', 'Python', 'PHP'];
\\ rest is a variable name
    var [a, ...rest] = arrays; 
>> Just get JS element
    console.log(a); => get JS
>> Get the remaining two elements
    console.log(rest); => get the remaining two elements / return array

> Lấy ra 1 value không được định nghĩa
    var listCourses = {
    name: 'Javascript',
    price: 1000,
    };

    var [name, description = 'default value'];
    console.log(description);

> Sử dụng toán tử Rest trên tham số thì nó sẽ thành một Array
    function logger(...params){
        console.log(params);
    }

    console.log(logger(1,2,3,4,5,6,7,8));

# Spread (...) (toán tử giải)
> giải -> bỏ đi dấu ngoặc trước array & object

> sử dụng khi gọi đến hàm và truyền đối số

> Khi giải trong 1 array hay 1 object khác thì đó là spread
EX:
  function logger(){

  }
  logger(...array);

# Tagged template literals
\\ parameter: tham số
\\ passed: được truyền
\\ Biến nội suy : ${}

> Tham số đầu tiên được truyền vào là phần nội dung trong hightlight và k chứa biến ${}
function hightlight(...rest) { 
    console.log(rest);
}

var brand = 'F8';
var course1 = 'Java'

hightlight`Học lập trình ${course1} tại ${brand}`; 

# Module: import/ export 
\\ Là tư tưởng bóc tách ra một thành phần xử lí một nghiệp vụ cụ thể ra 1 nơi riêng `Thường sẽ tách ra thành những file và tập hợp file`

\\ Một module chỉ export default được 1 lần

> import logger from './logger.js';  
\\ `import` thẳng tên như này là đang `import` cái `module export default`

> import {} from './constants.js';
\\ `import` không phải `export default`

>import * as constants from './constants.js';
\\ `*` lấy ra tất cả export nhỏ `as` sang 1 `alias constants` thành một `object`

# Optional chaining (?.)
\\ Khi chúng ta nghi ngờ 1 key của obj không tồn tại thì sẽ thêm vào `?.`
const obj = {
    names: 'Alice',
    cat: {
      names: 'Dinah',
      cat2: {
        names: 'Dinah2',
        cat3: {
            names: 'Dinah3'
        }
      }
    }
};
if(obj.cat.cat2?.cat3){
    console.log(obj.cat.names);// Truy cap vao thuoc tinh cua obj
}

> with Obj

obj[cat]?.[cat2] \\ `Nghi ngờ cat2 không tồn tại`

> with arr

obj.arr?.[index] \\ `Nghi ngờ arr không tồn tại index`

> with func

const obj = {
    // getName(value) {
    // console.log(value);
    // }
}

obj.getName?.(123)
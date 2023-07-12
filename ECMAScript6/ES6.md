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
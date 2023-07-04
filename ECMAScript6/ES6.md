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
\\ 1. Var / Let, Const: Scope, Hosting(đưa lên)
> Khác nhau ở phạm vi truy cập trong khi let, const chỉ truy cập được khi trong 1 khối code

> Var có thể truy cập ngoài phạm vi của nó (code block) / Let, const ngược lại

> Let, Const không có hỗ trợ hosting

\\ 2. Const / Var, Let: Assignment(gán lại)
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


\\ Template strings
\\ 1\n : in ra hai dòng
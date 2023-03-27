// DOM events
// 1. Attribute events
// 2. Assign event using the element node


// onclick
// onmouseover: hover vào
// onmouseout: hover ra



// Cách 2 

var h2Elements = document.querySelectorAll('h2'); 
// h2 Sử dụng querySelector thì sẽ chỉ selector thẻ h2 đầu tiên thấy trong DOM
// h2 coi như 1 mảng (querySelectorAll)

for (var i = 0; i < h2Elements.length; ++i){
    h2Elements[i].onclick = function(e){
        console.log(e.target); // Chính element click vào
    }
}
// sự kiện onclick sẽ diễn ra sau khi vòng for được chạy

/** PROBLEM */

// Nếu sử dụng console.log(h2Elements[i]) | Sẽ trả về undefined

// vòng for chỉ để gán thôi, mình click thì nó mới chạy, mà sau vòng for i tăng lên 3 rồi, ko có phần tử thứ [3] nên undefined

// - Với var: 3 callback lục trong lexical environment, đều thấy 1 binding i = 3.

// => bùm, elements[3] (lấy thằng có index thứ 4, của array có 3 items) => undefined. Nên log ra 3 thằng undefined thôi

// h2Element.onclick = function(e) {
//     console.log(e.target);
// }

// target trả lại chính element đang lắng nghe DOM events
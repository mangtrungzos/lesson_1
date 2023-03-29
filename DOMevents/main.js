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

// Đối số truyền vào trong function mouse event
/** PROBLEM */

// Nếu sử dụng console.log(h2Elements[i]) | Sẽ trả về undefined

// vòng for chỉ để gán thôi, mình click thì nó mới chạy, mà sau vòng for i tăng lên 3 rồi, ko có phần tử thứ [3] nên undefined

// - Với var: 3 callback lục trong lexical environment, đều thấy 1 binding i = 3.

// => bùm, elements[3] (lấy thằng có index thứ 4, của array có 3 items) => undefined. Nên log ra 3 thằng undefined thôi

// h2Element.onclick = function(e) {
//     console.log(e.target);
// }

// target trả lại chính element đang lắng nghe DOM events


/**-------------------DOM events example------------------- */
// 1. Input / select
// 2. Key up / down


// 1
// var inputElement = document.querySelector('input[type="text"]');

// Lấy ra giá trị được nhập vào thẻ input

// onchange : sự thay đổi (Lấy giá trị sau khi blur)

// oninput: Gõ đến đâu in ra đến đó (Lấy giá trị khi gõ trực tiếp)

// inputElement.oninput = function(e) {
//     console.log(e.target.value); // value lấy ra giá trị của thẻ input
// }


// var inputElements = document.querySelector('input[type="checkbox"]');

// inputElements.onchange = function(e) {
//     console.log(e.target.checked); // checked: Lấy tình trạng checked or not checked
// }

// var inputElementSelect = document.querySelector('select');

// inputElementSelect.onchange = function(e) {
//     console.log(e.target.value);
// }


// 2
// var inputElementKey = document.querySelector('input[type="text"]');

// inputElementKey.onkeydown = function(e) {
//     console.log(e.which);
    
//     switch(e.which){
//         case 27:
//             console.log('Exit');
//             break;
//     }
// }

// document.onkeydown = function(e){
//     switch(e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//         case 13:
//             console.log('Send chat');
//             break;
//     }
// }



/**--------------------Two methods of DOM events--------------------- */

// 1. preventDefault
// 2. stopPropagation


// 1. preventDefault
// var aElements = document.links;

// for (var i = 0; i < aElements.length; ++i){
//     aElements[i].onclick = function(e){
        
//         if (!e.target.href.startsWith('https://f8.edu.vn')){ // Khi thuộc tính href không chứa chuỗi địa chỉ này thì sẽ ngăn chặn hành vi mặc định
//             e.preventDefault();
//         }
//     }
// }


// Example preventDefault
// Ngăn chặn hành vi mặc định của trình duyệt khi onmousedown lên thẻ ul

ulElement = document.querySelector('ul');

// onmousedown: Khi click chuột xuống

ulElement.onmousedown = function(e){
    e.preventDefault();
}

ulElement.onclick = function(e){
    console.log(e.target);
}


// stopPropagation

document.querySelector('div').onclick = function(){
    console.log('DIV')
}

document.querySelector('button').onclick = function(e){ // e bắt sự kiện
    e.stopPropagation();
    console.log('Click me!')
}





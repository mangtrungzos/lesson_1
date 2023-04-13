// 1. Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session convention
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance


// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe

var btn = document.querySelector('button');


// Use DOM event
// btn.onclick = function(){

//     // Xử lý nhiều việc cùng 1 lúc khi 1 event xảy ra
//     btn.style.backgroundColor = 'blue';

//     console.log('Viec 1');
    
//     console.log('Viec 2');
    
//     alert('Viec 3');
// }
// console.log(btn);


// Request: Khi trang web được tải thì 3s đầu tiên k có việc gì xảy ra
// onclick chỉ là 1 key của object btn và nó đang được gán value là function
// onclick là 1 key của object nên có thể hoàn toàn bị ghi đè 

// setTimeout(function() {
//     btn.onclick = function() {
//         console.log('Viec 1');

//         console.log('Viec 2');

//         console.log('Viec 3');
//     }
// }, 3000);


// Hủy bỏ lắng nghe của 1 event khi sử dụng DOM event => Gán lại bằng 1 function rỗng
// Request: Không muốn lắng nghe sau 3s

// setTimeout(() => {
//     btn.onclick = function (){}
// }, 3000);



// EVENT LISTENER
function viec1() {
    console.log('Viec 1');
}

function viec2(){
    console.log('Viec 2');
}

// Lắng nghe
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);

    
setTimeout(function() {
// Hủy bỏ lắng nghe
    btn.removeEventListener('click', viec1);
}, 3000);
// HTML DOM

// Có 3 thành phần

// 1. Element : ID, class, tag, CSS selector, HTML collection
/**
 * ID: return thẳng đối tượng đó 
 * className: return HTML collection(Giống 1 mảng)
 * tagName: return HTML collection (same className | difference: CSS qua tên thẻ)
 * CSS selector: querySelector(Lấy thẳng luôn 1 đối tượng) | querySelectorAll(select qua tất cả đối tượng element mà có class matching với class khi truyền vào)
 */

// 2. Attribute
// 3. Text
 
// Node

// ---------------------

// Javascript: Browser | Server (NodeJS)

// API(Application programming interface)
// Browser: HTML -> DOM -> DOM API
// WEB API: Provide DOM

// --------------------

// Get elements methods

// getElementById()
// getElementsByTagName()
var headingNodes = document.getElementsByClassName('heading');
var headingNodes = document.getElementsByTagName('p');

// CSS selector
var headingNodes = document.querySelector('.heading'); // return h1
var headingNodes = document.querySelector('.box .heading-2');
var headingNodes = document.querySelector('.box .heading-2:first-child');
var headingNodes = document.querySelector('.box .heading-2:nth-child(2)');

// querySelectorAll return nodeList
// console.log(headingNodes[1])

// form 
console.log(document.forms['form-1']);

console.log(document.forms.testForm); // Đặt tên JS testForms

// a
console.log(document.anchors); // Lấy ra tất cả thẻ a

console.log(headingNodes);

// console.log({
//     element: headingNode
// });


// 1. getElementById
// 2. getElementsByTagName
// 3. getElementsByClassName
// 4. querySelector
// 5. querySelectorAll

// 6. HTML collection
// console.log(document.fomrs[...])

// 7. document.write
// document.write('hello')


// Node text


/*-----------------------------------------*/
// DOM attributes

var headingElement = document.querySelector('h1');

headingElement.title = 'Title test'

// 1. console.log(headingElement.title); / Attributes phải thuộc Element đó thì mới dùng cách này được

// 2.
// Set Attributes in a Element
headingElement.setAttribute('d', 'heading');

// Get value of attributes
console.log(headingElement.getAttribute('class'));

// Get Attributes added by JS
console.log(headingElement.getAttribute('title'));

console.log(headingElement.getAttribute('d'));

var headingElements = document.querySelector('h2');

headingElements.setAttribute('style', 'color: blue');


/*--------------------------------------------------*/
// Text Node

// innerText, textContent

// geter
// seter : change content of an Attributes of an object

var headingElement1 = document.querySelector('h1'); // headingElement1 is an object

console.log(headingElement1.innerText); // This is a geter
console.log(headingElement1.textContent); // This is a geter

headingElement1.innerText = 'New heading';  // This is a seter
// textContent the same

// Sự thay đổi này được tạo ra khi Js được thực thi

headingElement1.textContent = '<i>New heading</i>';

headingElement1.textContent = `

New heading

`;


/*--------------------------------------------------*/
// innerHTML | outerHTML

var boxElement = document.querySelector('.box')

// innerHTML
boxElement.innerHTML = '<h1 title="heading">boxHeading</h1>'; // seter

console.log(document.querySelector('h1').innerText);
console.log(boxElement.innerHTML); // geter

// outerHTML
boxElement.outerHTML = '<span>Test</span>'; // Ghi đè thẻ box

console.log(boxElement); // return thẻ box | vẫn còn là do còn trong bộ nhớ | do get ra từ querySelector
// Trong DOM thật không còn nữa


/*-------------------------------------------------*/

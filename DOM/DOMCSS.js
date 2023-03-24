// DOM style

var boxElement = document.querySelector('.box');

boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';


// Element style

// Object assign: gán

// CSS inline
Object.assign(boxElement.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
    borderRadius: '50%',
    transform: 'translateX(50%) translateY(50%)',
});

console.log(boxElement.style.transform);// Lấy ra thuộc tính CSS inline của đối tượng

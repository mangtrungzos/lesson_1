// Promise
// Sync / Async

// setTimeout / setInterval, fetch, xmlHttpRequest, file reading
// request animation frame

// callback


// Callback hell 
// Pyramid of doom

// Tuần tự
// Callback hell
setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            setTimeout(() => {
                console.log(4);
            }, 1000);
        }, 1000);
    },1000);
},1000); // Những tác vụ phụ thuộc lẫn nhau
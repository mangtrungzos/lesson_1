// Promise
// Sync / Async

// setTimeout / setInterval, fetch, xmlHttpRequest, file reading
// request animation frame

// callback


// Callback hell 
// Pyramid of doom

// Promise pain
// Tuần tự
// Callback hell
// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);
//             }, 1000);
//         }, 1000);
//     },1000);
// },1000); // Những tác vụ phụ thuộc lẫn nhau


/*-------------------------------------------*/
// Promise concept
// 1. new Promise
// 2. Excutor


// Trạng thái
// 1. Pending -> chờ
// 2. Fulfilled -> success
// 3. rejected -> fail


// create a promise / function(resolve, reject)
// var promise = new Promise(
//     // Excutor
//     function(resolve, reject){
//         // logic
//         // Thành công: resolve()
//         // Thất bại: reject()

//         // Fake call API
//         // resolve([
//         //     {
//         //         id: 1,
//         //         name: 'JavaScript'
//         //     }
//         // ]);

//         reject('co loi');
//     }
// );

// promise
//     // Khi resolve() được gọi -> callback của then đươc gọi
//     .then(function(courses){
//         console.log(courses);    
//     })
//     // Khi reject() được gọi -> callback của catch được gọi
//     .catch(function(error){
//         console.log(error);  
//     })
//     // Khi 1 in 2 resolve() or reject() được gọi -> callback of finally đươc gọi
//     .finally(function(){
//         console.log('Done!');          
//     })

/*-----------------------------------------------*/

// Promise(chain)
var promise = new Promise(
    function(resolve, reject){
        resolve();
    }
);

promise 
    .then(() => { // return 1 không console giá trị
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve([1,2,3]);
            }, 3000);
        }); 
    })
    .then(function(data) { // data nhận value = [1,2,3] | console -> [1,2,3]
        console.log(data); 
        return 2;          // return 2
    })
    .catch(() => {
        console.log(error);
    })
    .finally(() =>{
        console.log('Done!');
    })


// Example:
function sleep(ms){
    return new Promise((resolve) =>{
        setTimeout(resolve, ms); // Truyền vào ms = 1000 sau 1 khoảng 1s thì mới resolve promise này
    });
}


sleep(1000)
    .then(() => {
        console.log(1);
        return sleep(1000);
    })
    .then(() => { // rejected and will not continue to do 'then' below but will enter the 'catch' 
        console.log(2);
        return new Promise((resolve) =>{
            reject('co loi');
        });
    })
    .then(() => {
        console.log(3);
        return sleep(1000);
    })
    .then(() => {
        console.log(4);
        return sleep(1000);
    })
    .catch((err) => {
        console.log(err);
    })


    
    // function hell(value, cb) {
    //     cb(value);
    // }
    
    // Không sử dụng Promise dẫn đến tạo ra callback hell 
    // hell(1, function (valueFromA) {
    //     hell(valueFromA + 1, function (valueFromB) {
    //         hell(valueFromB + 1, function (valueFromC) {
    //             hell(valueFromC + 1, function (valueFromD) {
    //                 console.log(valueFromD + 1);
    //             });
    //         });
    //     });
    // });
    
    // // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
    // function notHell(value) {
    //     return new Promise(function (resolve) {
    //         resolve(value);
    //     });
    // }
    
    // notHell(1)
    //     .then(function (value) {
    //         return value + 1;
    //     })
    //     .then(function (value) {
    //         return value + 1;
    //     })
    //     .then(function (value) {
    //         return value + 1;
    //     })
    //     .then(function (value) {
    //         console.log(value + 1);
    //     });
    
    
    
/*------------------------------------------------------------------------ */

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// Thư viện: output luôn luôn là một promise

// Create a promise in a state of success
var promise = Promise.resolve('Success!');

// Create a promise in a state of Error
// var promise = Promise.reject('Error!');

// var promise = new Promise((resolve, reject) =>{
//     // Logic
//     resolve('Success');
//     // If promise is fail, will enter the "catch"
//     // reject('Failed');
// })

promise
    .then((result)=>{
        console.log('result:', result);
    })
    // .catch((err)=>{
    //     console.log('err:', err);
    // });
    




////////////////// Promise all ////////////////////
var promise1 = new Promise((resolve) =>{
    setTimeout(() => {
       resolve([1]); 
    }, 1000);
});

var promise2 = new Promise((resolve) =>{
    setTimeout(() => {
       resolve([2,3]); 
    }, 2000);
});


// if there is a defective 1 promise, then it will enter the"catch"
// var promise2 = Promise.reject('Co loi');

Promise.all([promise1, promise2]) // When use "Promise.all", all promise(promise1, promise2) to result 
    .then((result)=>{ // Then it will be in the ".then()"
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2)); // concat nối 2 Aray với nhau
    })

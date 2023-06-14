// 1. Event listeners --> OK
// 2. JSON
//      - Ứng dụng thực tế của JSON
// 3. Promise
//  - Sync
//  - Async
//  - Nỗi đau
//  - Lý thuyết, cách hoạt động
//  - Thực hành, ví dụ
//  - Ứng dụng thực tế của Promise (app.js)
// 4. Fetch
// 5. DOM location
// 6. Local storage
// 7. Session storage
// 8. Coding convention
// 9. Best Practices
// 10. Mistakes
// 11. Performance



// JSON: Number, String, Boolean, Null, Array, Object

// 1 chuổi JSON thể hiện kiểu dữ liệu boolean
// var json = 'true'; 

// 1 chuổi JSON thể hiện kiểu Array 
// var json = '["Javascript","PHP"]';

// Thể hiện 1 object
// var json = '{"name": "Sang", "age": 21}';

// Convert to JavaScript 
// console.log(JSON.parse(json)); 


// console.log(JSON.stringify(1)); // JavaScript to JSON

// console.log(JSON.stringify([
//     'JavaScript',
//     'PHP'
// ]));

// console.log(JSON.stringify({
//     name: 'TrogSeag',
//     age: 21
// }));

/*------------------------------------------------------------------------------ */

// Promise
// Sync / Async

// setTimeout / setInterval, fetch, xmlHttpRequest, file reading
// request animation frame

// callback

setTimeout(function(){
    console.log(1);
}, 1000);

console.log(2);


var users = [
    {
        id: 1,
        name: 'Trogseag'
    },
    {
        id: 2,
        name: 'Thuan Vu'
    },
    {
        id: 3,
        name: 'Thanh Bee'
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'hey guys!'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Welcome back to my channel'
    },
    { 
        id: 3,
        user_id: 3,
        content: 'Today my video to talk about...'
    }
];

function getComments(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(comments);
        }, 1000); // Sau 1s resolve dữ liệu
    });
}

function getUserByIds(userIds){
    return new Promise((resolve) =>{
        // Lọc ra user nằm trong list userIds
        var result = users.filter((user) =>{ 
            
            // Trả về chỉ bao gồm user.id
            return userIds.includes(user.id) 
        });
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}

// Lấy comments trước -> Lấy user_id từ user_id -> sau đó chọc vào user -> Lấy ra name of user 


getComments() 
    .then((comments) => {
        var userIds = comments.map((comments) =>{
            return comments.user_id;
        // Mảng mới userIds
        })
        return getUserByIds(userIds) // Truyền vào list userIds
            .then((users) =>{
                return{
                    users: users,
                    comments: comments,
                }
            });
    })
    .then((data) =>{
        var commentBlock = document.getElementById('comment-block');
        var html= '';
        data.comments.forEach((comment) =>{
            var user = data.users.find((user) =>{
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });


/////////////////////////////// Fetch //////////////////////////////////

// API (URL) - Application programming interface

// Backend -> API (URL) -> Fetch -> JSON/XML
// -> JSON.parse -> Javascript types
// -> Rendet ra giao diện với HTML

// website: placeholders API 

var postApi = 'https://jsonplaceholder.typicode.com/posts';

    // stream 
fetch(postApi) 
// Fetch gọi API -> Nhận response -> từ response, json ra 1 Promise

    .then(function(Response) {
        return Response.json();
        // JSON.parse: JSON -> Javascript types
        // json(): trả về 1 Promise -> In Promise đã resolve -> json.parse
    })
    // json ra 1 Promise để nhận ra được json dưới 
    .then(function(posts) {
        // console.log(posts); // posts, nhận được kiểu dữ liệu ở đây -> sử dụng các kỹ thuật với Js
        var htmls = posts.map(function(post){
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    // When API call fails, show message
    .catch(function(err) {
        alert('Error!');
    });

    //////////////////// JSON Server: API Server //////////////////////
var courseApi = "http://localhost:3000/courses";
fetch(courseApi)
    .then((response) =>{
        return response.json();
    })
    .then((course) =>{
        console.log(course);
    });
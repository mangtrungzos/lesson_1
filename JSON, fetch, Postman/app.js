// 1. Event listeners --> OK
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance



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
        }, 1000);
    });
}

function getUserByIds(userIds){
    return new Promise((resolve) =>{
        var result = users.filter((user) =>{
            return userIds.includes(user.id)
        });
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then((comments) => {
        var userIds = comments.map((comments) =>{
            return comments.user_id;
        })
        return getUserByIds(userIds)
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
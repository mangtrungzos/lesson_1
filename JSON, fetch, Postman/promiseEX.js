// Example: Lấy tên người bình luận và nội dung bình luận
// Backend cấp cho 2 API (user/content)
var users = [
    {
        id: 1,
        name: 'Sang vu',
    },
    {
        id: 2,
        name: 'Kang vu',
    },
    {
        id: 3,
        name: 'Hung vu',
    }
    //...
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi!'
    },
    {
        id: 3,
        user_id: 1,
        content: 'Cam on anh!'
    }
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// Từ user_id lấy ra user tương ứng

// Fake API

// Knowledge in this Example

// 1. Array
// 2. Function, callBack
// 3. Promise
// 4. DOM

function getComments(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(comments);
        },1000);
    });
}

function getUsersByIds(userIds){
    return new Promise((resolve) =>{
       var result = users.filter((user) =>{
            return userIds.includes(user.id);
       });
       setTimeout(() => {
           resolve(result); 
       }, 1000);
    });
}

// Promise hell

getComments()
    .then((comments) =>{
        var userIds = comments.map((comments) =>{
            return comments.user_id;
        });
        return getUsersByIds(userIds)
            .then((users) =>{
                return {
                    users: users,
                    comments: comments,
                }
            });
    })
    .then((data) =>{
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach((comment) =>{
            var user = data.users.find((user) =>{
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });


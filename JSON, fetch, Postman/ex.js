let users = [
    {
      id: 1,
      name: "Nguyen Van A",
    },
    {
      id: 2,
      name: "Nguyen Van B",
    },
    {
      id: 3,
      name: "Nguyen Van C",
    },
  ];
  
  let comments = [
    {
      id: 1,
      userId: 2,
      content: "Hello, how are you?",
    },
    {
      id: 2,
      userId: 1,
      content: "Im fine, how about you?",
    },
    {
      id: 3,
      userId: 3,
      content: "Hello B, nice to meet you!",
    },
    {
      id: 4,
      userId: 1,
      content: "Nice to meet you",
    },
  ];
  
  let getComments = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(comments), 1000);
    });
  
  let getUserById = (userIds) =>
    new Promise((resolve) => {
      let result = users.filter((user) => userIds.includes(user.id));
      setTimeout(() => resolve(result), 1000);
    });
  
  getComments()
    .then((comments) => {
      let userId = comments.map((comment) => comment.userId);
      return getUserById(userId).then((user) => {
        return {
          users: user,
          comments: comments,
        };
      });
    })
    .then((data) => {
      var commentBlock = document.getElementById("comment-block");
      var html = "";
      data.comments.forEach((comment) => {
        let user = data.users.find((user) => user.id === comment.userId);
        console.log(user.name);
        html += `<li>${user.name}: ${comment.content}</li>`;

      });
      commentBlock.innerHTML = html;
    });
  
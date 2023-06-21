
var courseApi =  'http://localhost:3000/courses';


function start(){
  // callback return courses that match the renderCourses argument
  getCourses(renderCourses);
  // renderCourses will be passes as a callback
  // callback will be called when fetch called Api(Api fetch courses will call callback)
  // will call back renderCourses
  // and return data in function renderCourses

  handleCreateFrom();
}

// run first
start();

// Functions
function getCourses(callback) {
  fetch(courseApi)
    .then((response) =>{
        return response.json();
    })
    // callback received data is objects
    .then(callback);
    // Then callback will use to make ... 
}

// fetch mozilla 
function createCourse(data, callback){
  var options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  };
  fetch(courseApi, options)
    .then((response) =>{
      return response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id){
  var options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  };
  fetch(courseApi + '/' + id, options)
    .then((response) =>{
      return response.json();
    })
    .then(() =>{
      var courseItem = document.querySelector('.course-item-' + id);
      if(courseItem){
        courseItem.remove();
      }
    });
}

function renderCourses(courses) { // So we will received courses
    var listCoursesBlock = 
        document.querySelector('#list-courses');
    var htmls = courses.map((course) =>{
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick="handleAddCourse(${course.id}">Thêm</button>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateFrom(){
  var createBtn = document.querySelector('#create');
  createBtn.onclick = () => {
      var name = document.querySelector('input[name="name"]').value;
      var description = document.querySelector('input[name="description"]').value;
      
      var formData = {
        name: name,
        description: description
      };
      createCourse(formData, function(){
        getCourses(renderCourses);
      });
  };
}
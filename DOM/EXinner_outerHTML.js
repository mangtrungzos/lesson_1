// Example: chèn giá trị của html vào trong thẻ ul đã cho trước
function render(html) {
    var element = document.querySelector('ul');
    element.innerHTML = html;
}

render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`)

// Example: viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện
// Tips: use map, join
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
function render(courses){
    var courseList = courses.map((course) => {
        return `<li>${course}</li>`;
    });
    // function addLi(course){
    //     return `<li>${course}</li>`
    // }
    var addString = courseList.join(' ');
    var element = document.querySelector('ul');
    element.innerHTML = addString;
}

render(courses);
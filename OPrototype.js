/*
    Object prototype - Basic

    1. What is Prototype?
    2. When use ?
*/
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function(){
    return this.className;
}
var user = new User('Sang', 'Vũ', 'avatar');
var user2 = new User('Vũ', 'Sang', 'avatar 2');
// Object được khởi tạo từ hàm tạo User / User được add qua prototype thì tất cả những đối tượng được tạo ra từ hàm tạo User sẽ đều có những attribute & method của User được add qua prototype


console.log(user.firstName);
console.log(user2.getClassName());
// Đối tượng nào gọi tới getClassName thì this ở câu lệnh return chính là đối tượng mà được sử dụng để gọi tới getClassName 


// Example:
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var student = new Student('Vu', 'Sang');
Student.prototype.getClassName = function(){
    return `${this.firstName} ${this.lastName}`;
}

console.log(student.firstName);
console.log(student.lastName);
console.log(student.getClassName());
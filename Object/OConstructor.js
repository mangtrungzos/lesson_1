// Object constructor or Function constructor
// Cách tạo

function User(firstName, lastName, avatar){ // Hàm tạo (Object constructor)
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    // this ở đây được dùng để mô tả thuộc tính & phương thức sẽ có cho đối tượng khi khởi tạo từ Object constructor User

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
        // (1) This ở trong function này là this ở trong method getName sẽ được gọi từ đối tượng (author, user)
    }
} 

// Thuộc tính firstName, lastName, avatar = với tham số được truyền vào là firstName, lastName, avatar

var author = new User('sang', 'Vũ', 'Avatar');
var user = new User('vũ', 'Nguyễn', 'Avatar');
// Tuy 2 đối tượng author, user được khởi tạo từ 1 bản thiết kế nhưng việc thêm thuộc tính or phương thức cho các đối tượng sau khi được khởi tạo từ Object constructor User thì sẽ không bị ảnh hưởng tới nhau
// Tức là vẫn có thể chứa những thuộc tính, phương thức riêng của nó
// All thuộc tính, phương thức định nghĩa ở hàm tạo thì khi khởi tạo đều có những phương thức và thuộc tính đã mô tả ở hàm tạo
// Không thể gán 1 thuộc tính bên ngoài cho những đối tượng mà các đối tượng khác lại bị ảnh hưởng được, nó sẽ không hề bị ảnh hưởng

author.title = 'Chia sẻ dạo tại F8';
user.comment = 'Liệu có khóa asp.net sắp tới không';

console.log(author.getName()); // Khi đó ta có thể hiểu this ở đây là author (1)
console.log(user.getName());

// Example:
var Animal = function(name, leg, speed){
    this.name = name;
    this.leg = leg;
    this.speed =  speed;
    this.getAnimal = function(){
        return `${this.name} ${this.speed}`;
    }
}

var parrot = new Animal('Sun Conure', 2, '5km/h');
console.log(parrot.getAnimal());



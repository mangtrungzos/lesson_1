// Object in Javascript

var myInfo = {
    name: 'Vu Trong Sang',
    age: 20,
    address: 'Ba Ria Vung Tau',
    [emailKey]: '0328trongsang@gmail.com',
};


// Ex thêm key & value sau khi Object được tạo
myInfo.email = 'Sangv906@gmail.com';

console.log(myInfo);

// Lấy value ra ngoài
/// C1
console.log(myInfo.name);

/// C2
console.log(myInfo['name']);

/// TH key rỗng
console.log(myInfo['']); // undefined

/// TH not use solution 1: Không truyền dạng chuỗi
var myKey = 'address';
console.log(myInfo[myKey]);

/// Có thể thêm được 1 key mới or định nghĩa ra 1 key in object bằng 1 biến
var emailKey = 'email';

// Xóa key
delete myInfo.name;
console.log(myInfo);


// key là 1 function
/*
getName: function(){
    return this.name;
}
*/
var myInfo = {
    name: 'Vu Trong Sang',
    age: 20,
    address: 'Ba Ria Vung Tau',
    [emailKey]: '0328trongsang@gmail.com',
    getName: function(){
        return this.name;
    },
    getAge: function(){

    }
};

// Function --> Phương thức / method
// Others --> Thuộc tính / Property

console.log(myInfo.getName());





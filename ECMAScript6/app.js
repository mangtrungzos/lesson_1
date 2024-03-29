// 1. Var / Let, Const: scope, Hosting

// Code block: if else, loop, {}, ...

// In scope

// {
//     let course = 'python!'; // const
//     {
//         {
//             const course = 'python!';
//             console.log(course);
//         }
//     }
// }


// 2. Const / Var, Let: Assignment

// const a = 1;
// a = 100;
// console.log(a);
// Error! / Do sử dụng toán tử gán 2 lần cho const

// const a = {
//     name: 'Python'
// };

// a.name = 'PHP';
// console.log(a.name);
// True là bởi vì gán lại thuộc tính name của cái object được gán cho a chứ có gán lại cho a nên không lỗi


// --------------------------Template literals----------------------

const courseName = 'Javascript';
const courseName1 = 'PHP';
const descritpion = `Course name: ${courseName} ${courseName1} \{}`;

const coursesName = { // Có sử dụng Enhanced object literal
    [courseName]: 'TypeScript',
    [courseName1]: 'PHP',
    [descritpion]: 'Javascript, PHP' 
};
// console.log(descritpion);
console.log(coursesName);

const lines = `Line 1
Line 2
Line 3`;

console.log(lines);


//-----------------------Arrow function----------------------------

const logger = log => console.log(log);

logger('message...');

/////////////////////////
const sum = (a, b) => ({a: a, b: b});

console.log(sum(2,2));
////////////////////////
const course = {
    name: 'Javascript!',
    getName: () => {
        return this; // context
    }
};

console.log(course.getName());
////////////////////////

// Arrow function don't use make constructor function 
// const Course = (name, price) => {
//     this.name = name;
//     this.price = price;
// }

// const jsCourse = new Course('Javascript', 100);

// console.log(jsCourse); // Error!
////////////////////////
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
console.log(materials.map(material => material.length));
// Expected output: Array [8, 6, 7, 9]
///////////////////////
const func = (a) => ({ foo: a });

console.log(func(1));

//----------------------------Classes------------------------
// function Course(name, price){
//     this.name = name;
//     this.price = price;
//     this.getName = () => this.name;

//     const isSuccess = false;
// }

class Course {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    run() {
        const isSuccess = false;
    }
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('JS', 1200);

console.log(phpCourse);
console.log(jsCourse);
/////////////////////////
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// Expected results
const person = new Person('Sang', 21);
console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
// Output: 'Tên: Long, tuổi: 22'

// --------------------------Default parameters values-------------------
function Logger(log, type = 'log') {
    console[type](log);
}

Logger('Message...');
///////////////////////////
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // Expected output: 10
  
  console.log(multiply(5));
  // Expected output: 5

// --------------------------- Enhanced object literals------------------
var fieldName = 'name';
var fieldPrice = 'price';

const courses = {
    [fieldName]: 'PHP',
    [fieldPrice]: 1000
};
console.log(courses);



const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

// -------------------------- Destructuring -----------------------------

var array = ['Js', 'PHP', 'Ruby'];

var [a,b,c] = array;

console.log(a, b, c);

//
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// -------------------------- Rest -------------------------------

var arrays = ['JS', 'Python', 'PHP'];

var [a, ...rest] = arrays;
console.log(a);
console.log(rest); // Return array

// Example Use with Object

var listCourse = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address'
};

var {name, price, ...rest} = listCourse;
console.log(name, price);
console.log(rest);

// How to delete a key in an object

var listCourses = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
};

var {name: parentName, children:{ name },  descritpions = 'default value', ...newObject} = listCourses; // newObject is a variable name
// In this time, the "name" has the name "parentName"
console.log(newObject);

console.log(name); // get name of the children object

console.log(descritpions);

function loggers1(a,...params) { 
    console.log(params); // Lấy ra những phần còn lại
}

loggers1(1,2,3,4);

function logger1({ name, price, ...rest }){
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger1({
    name: 'JS',
    price: '2000$',
    descritpion: 'Content'
});
// ---------------------------- Spread ----------------------------

// In case array concatenation
var array1 = ['Javascript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];

var array3 = [...array2, ...array1];

console.log(array3);

//
var object1 = {
    name: 'Javascript'
};

var object2 = {
    price: '2000$'
};

var object3 = {...object1, ...object2};
console.log(object3);

//
var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other'
};

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-trang-bai-tap' // Khi có 2 key trùng nhau thì sẽ lấy key được định nghĩa sau(bị overwrite / ghi đè)
};

console.log(exerciseConfig);

//
var array4 = ['Js', 'PHP', 'Ruby', 'ReactJS'];

function logger2(...rest){
    for(var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

logger2(...array);

// --------------------------- Tagged template literals------------------
function hightlight([first, ...strings], ...values) { // The first parameter is passed to hightlight is content and not the variable (${course1},${brand})
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], 
        [first] // initial value
    )
    .join('');
}

var brand = 'F8';
var course1 = 'Java'

const html = hightlight`Học lập trình ${course1} tại ${brand}!`; 
console.log(html);

// ---------------------------- Optional chaining (?.) --------------------

const obj = {
    names: 'Alice',
    cat: {
      names: 'Dinah',
      cat2: {
        names: 'Dinah2',
        cat3: {
            names: 'Dinah3'
        }
      }
    }
};
if(obj.cat.cat2?.cat3){
    console.log(obj.cat.names);// Truy cap vao thuoc tinh cua obj
}

const obj1 = {
    getName(value) {
        console.log(value)
    }
}

obj1.getName(123);



function printCustomerCity(customer) {
    // Nếu đối tượng customer không có city -> return Unknown city
    const customerCity = customer?.city ?? "Unknown city"; // ?? Toán tử kết hợp
    console.log(customerCity);
  }
  
  printCustomerCity({
    name: "Nathan",
    city: "Paris",
  }); // "Paris"
  printCustomerCity({
    name: "Carl",
    details: { age: 82 },
  }); // "Unknown city"
  
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
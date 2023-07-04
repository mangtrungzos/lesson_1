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


// Template literals

const courseName = 'Javascript';
const courseName1 = 'PHP';
const descritpion = `Course name: ${courseName} ${courseName1} \{}`;

console.log(descritpion);

const lines = `Line 1
Line 2
Line 3`;

console.log(lines);
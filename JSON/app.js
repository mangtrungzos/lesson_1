// 1. Event listeners --> OK
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance


// JSON: Number, String, Boolean, Null, Array, Object

// 1 chuổi JSON thể hiện kiểu dữ liệu boolean
// var json = 'true'; 

// 1 chuổi JSON thể hiện kiểu Array 
// var json = '["Javascript","PHP"]';

// Thể hiện 1 object
var json = '{"name": "Sang", "age": 21}';


// Convert to JavaScript 
console.log(JSON.parse(json)); 


console.log(JSON.stringify(1)); // JavaScript to JSON

console.log(JSON.stringify([
    'JavaScript',
    'PHP'
]));

console.log(JSON.stringify({
    name: 'TrogSeag',
    age: 21
}));
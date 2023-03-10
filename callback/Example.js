Array.prototype.map2 = function(callback){
    var output = [], arrayLength = this.length;
    for(var i = 0; i < arrayLength; i++){
      var result = callback(this[i], i);
      output.push(result)
    }
    return output;
  }
  var courses= [
    'Javascripts',
    'PHP',
    'Ruby'
  ];
  var htmls = courses.map2(function(course,index){
    return `<h2>${course}</h2>`
  })
  console.log(htmls)


// reduce
Array.prototype.reduce2 = function(callback, result){
    let i = 0;
    if(arguments.length < 2){
        i = 1;
        result = this[i];
    }
    for (; i < this.length; i++){
        result = callback(this[i], i);
    }
    return result;
}

const numBers = [1, 2, 3, 4, 5];

const result = numBers.reduce2((total, number) => {
    return total + number;
})
console.log(result);


// some
Array.prototype.some2 = function(callback){
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++){
        var result = callback(this[i], i)
    }
    return result;
}
var somes = courses.some2((course) => {
  return course.coin === 0;
})

// find 
Array.prototype.find2 = function(cb){
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++){
    var result = cb(this[i], i);
  }
  return result;
}
var courses= [
  {
    id: 1,
    name: 'Javascript',
    coin: 100
  },
  {
    id: 2,
    name: 'HTML, CSS',
    coin: 200
  },
  {
    id: 3,
    name: 'Ruby',
    coin: 220
  },
  {
    id: 4,
    name: 'PHP',
    coin: 200
  },
  {
    id: 5,
    name: 'ReactJS',
    coin: 480
  }
];
var finds = courses.find2((course) => {
  return course.coin > 200 && course.id > 1;
})
console.log(finds);

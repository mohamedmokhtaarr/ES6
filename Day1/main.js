//Task 1

// var a=5;
// var b = 3;
// var arr =[b,a]

// console.log(arr);

// 2.A Task 2
//spread

// let arr = [10,20,30,40];
// let arr2 = [...arr]
// console.log(arr2);

// 2.B rest function


// function getArr (x,...rest){
//     console.log(rest);
//     console.log(x);
// }
// getArr("mahmoud",10 ,true);

// 2.C Max & Min
// function call (max,min){
//     console.log(`maximum number is ${max}\n minimum number is ${min}`);
// }
// let arr = [10,20,30,40];
// let max = Math.max(...arr);
// let min = Math.min(...arr)
// call(max , min)


// Task 3 

// 3.A
var fruits = ["apple", "strawberry", "banana", "orange","mango"]
// let result = fruits.every(item => typeof item === 'string');
// console.log(result);

// 3.B


// let result = fruits.some(function (item) {
//     	return item.startsWith("a");
//     });

//     console.log(result);

// 3.C

// let result = fruits.filter(function(item){return item.startsWith("b") || item.startsWith("s")})
// console.log(result);

// // 3.D
var result = fruits.map(function (item, index) {
    	return `I LIKE ${item}`;
    });
console.log(result)

//3.E
result.forEach( function (result){ 
console.log(result)
}
)
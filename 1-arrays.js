// *** ARRAYS *** //

// How can we store a list?
const first = 'buy groceries';
const second = 'take out trash';
const third = 'wash laundry';

// What is an array? What syntax does it use?
// an array contains a list of items; ordered and acessible by numbers

    //array     //strings
var toDoList = [first, second, third];

console.log(toDoList)
console.log(toDoList.length)
console.log(toDoList[toDoList.length-1])

let index = 0;
console.log(toDoList[index])

console.log(typeof toDoList.length)

// What can we keep in an array?

let canIReallyDoThat = [true, null, undefined, 'yes', 2, {name:'Lauren'}, [1,2,3,], 
function() {return 5}]
console.log(canIReallyDoThat)

// How can we access the items in an array?
let nestedArray = [1, [2,[3]]]
console.log(nestedArray[1][1][0])

// How can we access the end of an array?

// METHODS - functions inside of objects//
 
let methodsExample = [1,2,3]

// push

methodsExample.push(10)

console.log(methodsExample)

// pop

methodsExample.pop()

console.log(methodsExample)

// unshift

methodsExample.unshift(10)

console.log(methodsExample)

// shift

methodsExample.shift()

console.log(methodsExample)

// slice
                            //resolves into an array
                            //doesn't alter methodsExample
let partialArray = methodsExample.slice(0,1)

console.log(methodsExample)
console.log(partialArray)

// splice
                            //resolves into an array
                            //does alter methodsExample
let partialArrayTwo = methodsExample.splice(0,1)

console.log(methodsExample)
console.log(partialArrayTwo)
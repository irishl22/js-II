// *** OBJECTS *** //

// How can we store related pieces of data?
var name = 'Beth';
var hair = 'blonde';
var email = 'beth@dm.com';
var password = '$ecret';


// Would an array work?

//key value pairs; property: value
let user = {
    name: name,
    hair: hair,
    email: email
}

console.log(user.name)

// What is an object? What syntax does it use?

// What can we keep in an object?

let canIReallyDoThat = {
    first: true,
    second: null,
    third: undefined,
    fourth: 'string',
    fifth: 2,
    sixth: {name: 'Lauren'},
    seventh: [1,2,3],
    eighth: function() {
        return 5;
    }
}

// How can we access the items in an object?

console.log(canIReallyDoThat.sixth.name.length)

// How can we add more data to an object?

canIReallyDoThat.bestMan = 'Bob Ross'

console.log(canIReallyDoThat)

// METHODS // it is the pattern of putting a function on an object

let thing = canIReallyDoThat.eighth
console.log(thing)

// What are functions that are stored in objects called? What syntax do they use?

// How do we write them?

// How do we invoke them?




// NESTED DATA //

// What if we have arrays and objects inside of each other???
//// Simple data types
//// Objects
//// Methods on objects
//// Using a for loop


let myData = {
    name: 'Bob Ross',
    favoriteThings: ['Rain dancing', 'making happy clouds', 'giving out friends']
}

console.log(myData.favoriteThings[1]);

for(let i = 0; i < myData.favoriteThings.length; i++) {
    console.log(myData.favoriteThings[i]);
    myData.favoriteThings[i] = 'Smiling';
}

console.log(myData.favoriteThings)
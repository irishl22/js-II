// *** FOR LOOPS *** ///

// What is a for loop? What syntax does it use?
// starting, ending, incrementor

// declare i
for(let i = 0; i < 10; i++) {
    // i < 10 boolean    
    console.log(i)
    // i++
}
// How many different ways can we loop?

for(let i = 100; i > 20; i--) {
    console.log(i)
}

// Can we go backwards?

// How can we use a for loop with an array?

let bestPeople = ['Bob Ross', 'Mr. Rogers', 'Steve Erwin', 'The Rock']

for(let i = 0; i < bestPeople.length; i++) {
    console.log(bestPeople[i])
}

// Can we go backwards through an array?

for(let i = bestPeople.length-1; i >= 0; i--) {
    console.log(bestPeople[i])
}

let nums = [1,2,3,4,5,6,7];

for(let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * 2;
}

console.log(nums)

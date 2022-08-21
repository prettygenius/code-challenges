// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)



function generateRange(min, max, step){
    let array = []
for( let i = min; i <= max; i+=step) {
        array.push(i)
}
return array
}

//generate a range of numbers in a array
//use for loop to start the min value instead of normal 0
//let it run up till its equal to the the the max in the range
//increment by step of 2 each time instead of ++
//push each number onto the array after each step increment; return array
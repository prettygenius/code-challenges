/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const myNumsSquared = nums.map((num) => {
    return num * num
})

console.log(myNumsSquared)
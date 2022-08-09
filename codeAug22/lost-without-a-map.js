// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//stored in variable
function maps(x){
    const result =  x.map((dbl) => {
      return dbl * 2
    })
    return result
    }
//or
function maps(x){
    return x.map((n) => {
        return n * 2;
    })
}

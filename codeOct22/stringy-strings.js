// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
    let str = ''
    return str.padStart(size,'10')
    
  }
  stringy()

//the string of 1's and alternating 0's get attached to the length each time
//length is set in argument which determines the size of string(or how many 1's and 0's)
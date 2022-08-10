// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2] //use Es6 rest params to group arrays
    let sum = arr.reduce((accumulator,current) => { //use reduce method for the sum
      return accumulator + current
    },0)
    return sum;
  }
  
  
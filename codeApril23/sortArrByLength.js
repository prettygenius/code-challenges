//   Write a function that takes an array of strings and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]
  
  
function sortByLength() {
    let myArray = ["Telescopes", "Glasses", "Eyes", "Monocles"]
    myArray.sort((arrA, arrD) => arrA.length - arrD.length)
    return myArray
    
  }
  console.log(sortByLength())
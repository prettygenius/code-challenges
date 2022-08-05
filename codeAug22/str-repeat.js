// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (num, str) {
    let strCount = "";
    for (let i = 0; i < num; i++) {
      strCount += str;
      
    }
    return strCount
  }
  //alt use the repeat() method
  function repeatStr (num, str) {

    return `${str.repeat(num)}`
    }
    
    
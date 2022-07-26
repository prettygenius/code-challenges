// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0
    const arr = str.split("")
    for( let i = 0; i < arr.length; i++) {
      switch(arr[i]) {
      case 'a': count++;
          break;
      case 'e': count++;
          break;
      case 'i': count++;
          break;
      case 'o': count++;
          break;
      case 'u': count++;
      }
    }
    return count
  }
  //loop through each letter in array from string if a vowel increment the count and return total
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// remove space
// if the str's length is even slice from
// length / 2 - 1
// length / 2 :
// if part one === part two reverse then true

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  let regex = /[a-z]/gi;
  let sortedStr = str.toLowerCase().match(regex);
  for (let i = 0; i < sortedStr.length; i++) {
    if (sortedStr[i] !== sortedStr.reverse()[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;

/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  if (str.length === 0) {
    return 0;
  }
  let regex = /[a-z]/gi;
  let sortedStr = str.match(regex).sort().join("");
  let vowels = /[aeiou]/gi;
  if (!sortedStr.match(vowels)) {
    return 0;
  }
  return sortedStr.match(vowels).length;
}

module.exports = countVowels;

/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let a = str.toLowerCase()
  let counter = 0
  let vowels = ['a','e','i','o','u']
  for (let index = 0; index < a.length; index++) {
    // console.log(a[index])
    if(vowels.includes(a[index])){
      
      counter = counter + 1
    } 
  }
  return counter
}
module.exports = countVowels;
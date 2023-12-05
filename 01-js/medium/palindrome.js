/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let a = str.toLowerCase().replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  a = a.replace(/ /g,'')
  rev_str = "";
  for (let i = a.length - 1; i >= 0; i--) {
          rev_str = rev_str+a[i];
    
  }

  return a==rev_str;
}
console.log(isPalindrome("nitin?"))
module.exports = isPalindrome;

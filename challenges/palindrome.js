// 1. Check if an input word is a palindrome.//

function palindrome(myString) {
  let word1 = "";
  let word2 = "";
  for (i = 0; i < myString.length; i++) {
    word1 = word1 + myString.charAt(i);
  }
  for (j = myString.length - 1; j >= 0; j--) {
    word2 = word2 + myString.charAt(j);
  }
  if (word1 === word2) {
    console.log("It's a palindrome");
  } else {
    console.log("It's not a palindrome");
  }
}
palindrome("anavolimilovana");


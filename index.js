//function isPalindrome(word) {
  // is "word" a palindrome?
  //need code to return true if palindrome and false if not
  //My Test Cases:
    // Input: "racecar"
    // Output: true
    // Input: "caius"
    // Output: false
//}

/* 
  Add your pseudocode here
*/
function isPalindrome(word){
  const array = Array.from(word); //creates an array with each letter in word
  let reverse = array.reverse(); //creates a reversed array
  let reverseTogether = reverse.join(''); //joins the letters of the reversed array into a new word
  if (word === reverseTogether){ //compares word with reversed word to see if they are deeply equal
    return true;
  } else return false;
}
isPalindrome("racecar");
/*
  This function takes in a word and checks to see if it is a palindrome. In line 15, the word is turned into an array. In line 16, the array is then flipped into reverse order. I did it in this way so the function can take in any length of word to compare it's letters and I do not need to know how many letters there will be. Line 17, takes the reversed array and creates a new word, which is the original word with all letters flipped. Line 18-20 does the comparison of the original word with the reversed word. If they are the same, the word is a palindrome and returns true, if they are not the same it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

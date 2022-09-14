// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const testAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here
      //test to make sure alphabet was sent 
    if(!alphabet) return false;
    //check if alphabet is 26 in lenght, if not return false 
    if (alphabet.length !== 26) return false;
    //need new array to store and split alphabet 
    let abcArray = alphabet.split("");
    
    //make alphabet and input toLowerCase 
    alphabet = alphabet.toLowerCase();
    input = input.toLowerCase();
    
    //need to check for unique characters 
    let unique = true;
    abcArray.forEach(character => {
      const uniqueList = abcArray.filter(elment => elment === character);
      //if list is greater then 1, return false 
      if(uniqueList.length > 1) unique = false;
    });
    if(!unique) return unique;
    //need a new array for input and then split 
    const inputArray = input.split("");
    //need to decode and ecode to different param 
    return (encode ? decodeEncode(inputArray, testAlphabet, alphabet) : decodeEncode(inputArray, alphabet, testAlphabet));
  }
  //decodeencode funtction 
  function decodeEncode(messageArray, messageAlphabet, transAlphabet){
    const result = [];
     messageArray.forEach(character => {
      const messageAlphabetIndex = messageAlphabet.indexOf(character);
      const transAlphabetArray = transAlphabet.split('');
       if (character === ' ') {
        result.push(character);
      } else {
          try {
            if (messageAlphabetIndex === -1) {
              throw new Error (`'${character}' is not in messageAlphabet`);
            };
            result.push(transAlphabetArray[messageAlphabetIndex]);
          } catch (err) {
            console.error(err);
          }
      }
    });
    return result.join('');
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

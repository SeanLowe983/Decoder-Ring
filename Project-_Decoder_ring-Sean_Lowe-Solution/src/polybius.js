// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //solution coder here
    //make input lower case 
    input = input.toLowerCase();
    //seperate encoder and decoder with if/else to make it easy to follow and to true to encode and false to decode 
    return (encode ? polyEncoder(input) : polyDecoder(input));
    
  //need to write a function for the encoder input   
  function polyEncoder(input) {
    const input1 = input.split('');
    const result1 = [];
    input1.forEach(letter => {
      //write a small try catch error test here 
      try {
      result1.push(LettersToNum(letter));
      } catch (err) {
        console.error(err);
      }
    })
    //need to "join"
    return (result1.join(''));
  }
//need to switch the letters to number using the switch method 
  function LettersToNum(letter) {
    let result = 0;
    if (letter === ' ') {
      return ' ';
    } else {
      //switch - case - result - break after each case. case is letter and result is number from polybius square 
      switch (letter) {
        case 'a':
          result = 11;
          break;
        case 'b':
          result = 21;
          break;
        case 'c':
          result = 31;
          break;
        case 'd':
          result = 41;
          break;
        case 'e':
          result = 51;
          break;
        case 'f':
          result = 12;
          break;
        case 'g':
          result = 22;
          break;
        case 'h':
          result = 32;
          break;
        case 'i':
        case 'j':
          result = 42;
          break;
        case 'k':
          result = 52;
          break;
        case 'l':
          result = 13;
          break;
        case 'm':
          result = 23;
          break;
        case 'n':
          result = 33;
          break;
        case 'o':
          result = 43;
          break;
        case 'p':
          result = 53;
          break;
        case 'q':
          result = 14;
          break;
        case 'r':
          result = 24;
          break;
        case 's':
          result = 34;
          break;
        case 't':
          result = 44;
          break;
        case 'u':
          result = 54;
          break;
        case 'v':
          result = 15;
          break;
        case 'w':
          result = 25;
          break; 
        case 'x':
          result = 35;
          break;
        case 'y':
          result = 45;
          break;
        case 'z':
          result = 55;
          break;
        default:
          throw new Error(`'${letter}' is not a letter`); //throw quick error just incase it is not a letter 
      }
    }
    return result;
  }
    
    //write funciton for decoder input 
   function polyDecoder(input) {
     //need to test if even becuase odd would be false 
    const testIfEven = input.split(' ');
    let testPass = true;
   
    // if not even num return false 
    testIfEven.forEach(letterWord => {
      if (letterWord.length % 2) testPass = false;      
    });
    if (!testPass) return testPass;
    const input2 = input.split('');
    const result2 = []; 
     //need to for loop througt input2 and push ''
    for (let i = 0; i < input2.length; i++) {    
      if (input2[i] === ' ') {
        result2.push(' ');
      } else {  
        const numLetter = [input2[i], input2[i+1]];
        i++;
        //TRY CATCH ERROR
        try {
          result2.push(numToLetters(numLetter));
        } catch (err) {
          console.error(err);
        }
      }
    }
    return result2.join('');
  }
    //need to write a function for numbers to letters 
 function numToLetters(codeLetter) {
    const first = codeLetter[0] - 1;
    const second = codeLetter[1] - 1;
   ///throw error if greater then 4 or les then 0 for both codeletter 
    if (first > 4 || first < 0) {
      throw new Error(`${first} is not between 0 and 4`)
    }
    if (second > 4 || second < 0) {
      throw new Error(`${second} is not between 0 and 4`)
    }
    const polySquare = [
      ['a', 'f', 'l', 'q', 'v'],
      ['b', 'g', 'm', 'r', 'w'],
      ['c', 'h', 'n', 's', 'x'],
      ['d', 'i/j', 'o', 't', 'y'],
      ['e', 'k', 'p', 'u', 'z']
    ];
   //need to reutrn first and second 
    return polySquare[first][second];
  }   
  
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

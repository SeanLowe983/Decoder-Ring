// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
      //if shift is 0, less then -25 more then 25 or undefind return false 
    if(shift === 0 || shift < -25 || shift > 25 || !shift){
      return false;
    }
    let code = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let result = [];
    input = input.toLowerCase().split("");
    input.forEach((char) => { if(code.includes(char)){
      code.find((letter, index) => {
        if(letter === char) 
        {let newIndex;
        if(encode === true)
        { newIndex = index + shift;}
      else { newIndex = index - shift}
         if(newIndex < 0){
           newIndex = newIndex + 26};
         if(newIndex > 25){
           newIndex = newIndex - 26};
         result.push(code[newIndex])
         
         
        }
        })
      
      
    }
      else {result.push(char)}                       
    });
    return result.join("")
  
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

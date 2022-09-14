// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;


describe("substitution", () => {
  //need maintain spacing encoding 
  it("should maintain spaces when encoding", () => {
     //input, expected, alpha, actual 
     let input = "You are an excellent spy";
     let expected = "elp xhm xf mbymwwmfj dne";
     let alphabet = "xoyqmcgrukswaflnthdjpzibev";
     let actual = substitution(input, alphabet, (encode = true));
  //act to equal expected 
  expect(actual).to.equal(expected);
     });
         //need to maintain spacing when decoding 
   it("should maintain spaces when decoding", () => {
          //input, expected, alpah, encode, actual
   let input = "elp xhm xf mbymwwmfj dne";
   let expected = "you are an excellent spy";
   let alphabet = "xoyqmcgrukswaflnthdjpzibev";
   let encode = false;
   let actual = substitution(input, alphabet, encode);
//act = expected 
     expect(actual).to.equal(expected);       
     });    
  //need to return false if alpha not 26 characters long 
  it("should return false if alphabet is not exactly 26 characters long", () => {
     //same input setup minus expected and to be false 
     let input="a";
     let alphabet ="abc";
     let actual = substitution(input, alphabet, (encode = true));
     //act to be false 
     expect(actual).to.be.false;
     });
//need to return false if any duplicated characters 
it("should return false if any duplciated characters in given alpahbet", () => {
   //same input setup minus expected and to be false
   let input = "thinkful";
   let alphabet= "xoyqmcgrukswaflnthdjpzibevv";
   let actual = substitution(input, alphabet, (encode = true));
// act to be false 
expect(actual).to.be.false;
   });
//ignore capital letters need two inputs
it("should ingore capital letters", () => {
   //same input setuyp
   let input1 = "thinkful";
   let input2 = "THINKFUL";
   let alphabet = "xoyqmcgrukswaflnthdjpzibev";
   let expected = substitution(input2, alphabet, (encode = true));
   let actual = substitution(input1, alphabet, (encode = true));
//act = expected
expect(actual).to.equal(expected);
    });

 it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    let input = "thinkful";
    let expected = "jrufscpw";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });  
});
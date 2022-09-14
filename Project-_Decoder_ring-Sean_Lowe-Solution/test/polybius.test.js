// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;
describe("polybius",() => {
  //need to return letter with numbers 
  // need to "let" input, expected, actual & actual = expected
it("should return 21 when b",() => {
   let input = "b";
   let expected = "21";
   let actual = polybius(input, (encode = true));
  expect(actual).to.equal(expected)
   });
  //translate  i & j to 42
  it("when encoding, translates i and j to 42", () => {
    let input = "i j";
    let expected = "42 42";
    let encode = true;
    let actual = polybius(input, encode);
    //act = expected
    expect(actual).to.equal(expected);
  });
  //ignore cap letters need two inputs 
  it("should ignore capital letters", () => {
  let input1 = "thinkful";
  let input2 = "THINKFUL";
  let encode = true;
  let actual = polybius(input1, encode);
  let expected = polybius(input2, encode);
  //act = expected 
  expect(actual).to.equal(expected);
  });
  //return thinkful with 4432423352125413
  it("should return thinkful when given 4432423352125413 ", () => {
    let input = "4432423352125413";
    let encode = false;
    let actual = polybius(input, encode);
    let expected = "thi/jnkful";
    //act = expected
    expect(actual).to.equal(expected);
    });
  //should maintain spaces when encoding 
  it("should maintain spaces when encoding", () => {
    let input = "thinkful thinkful";
    let encode = true;
    let actual = polybius(input, encode);
    let expected = "4432423352125413 4432423352125413";
    //actual = excpected
    expect(actual).to.equal(expected);
  });
  //should maintain spacing when decoding
  it("should maintain spaces when decoding", () => {
    let input = "4432423352125413 4432423352125413";
    let encode = true;
    let actual = polybius(input, false);
    let expected = "thi/jnkful thi/jnkful";
    //act = expected 
    expect(actual).to.equal(expected);
  });
  //needs to reutrn false if number of digits is odd when you are decoding 
  it("should return false if number of digits is odd when decoding", () => {
    let input = "443242334212541";
    let encode = false;
    let actual = polybius(input, encode);
    //actual needs to be false 
    expect(actual).to.be.false;
  });
});
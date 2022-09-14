// Write your tests here!
//need to write the test for shift not present, 0, less than -25 or greater then 25...need to return false 
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;


describe("caesar", () => {
  it("should return false if shift not present", () =>{
    //need to "let" input, shift, actual, expected
    // test for undefined
    let input = "hello";
    let shift = undefined;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    //actual needs to equal expected 
    expect(actual).to.equal(expected);
  });
  //test for if shif is 0
  it("should return false if shift = 0", () => {
    //follow same "let" setup as above
    let input = "hello";
    let shift = 0;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    //actual to equal expected
    expect(actual).to.equal(expected);
  });
  //test for if less then -25
  it("should return false if less then -25", () => {
    //follow same "let" setup above
    let input = "hello";
    let shift = -26;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    //actual to equal expected 
    expect(actual).to.equal(expected);
  });
  //test for if greater then 25
  it("should return false if greater then 25", () => {
    //follow same "let" setup as above
    let input = "hello";
    let shift = 26;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    //actual to equal expected 
    expect(actual).to.equal(expected);
  });
  //"it" for thinkful returned with wklqnixo
  it("should return thinkful when given wklqnixo", () =>{
    // "let" input, shift, actual and expected..
    let input = "wklqnixo";
    let shift = -3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "thinkful";
    //actual to equal expectedd 
    expect(actual).to.equal(expected);
  });
  //"it" for wklqnixo returned with thinkful
  it("should return wklqnixo when given thinkful", () => {
    //follow "let" above 
    let input = "thinkful";
    let shift = 3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "wklqnixo";
    //actual to = expected 
    expect(actual).to.equal(expected);
  });
  // decode the example give to secret message
  it("should decode 'bpqa qa i amkzmb umaaiom!' to 'This is a secret message!'", () => {
    //"let" as you did above
    let input = "bpqa qa i amkzmb umaaiom!"
    let shift = -8;
    let actual = caesar(input, shift, (encode = true));
    let expected = "this is a secret message!"
    //actual to = expected 
    expect(actual).to.equal(expected);
  });
  it("should invert shift (decode) if encode is false", () => {
    let input = "bpqa qa i amkzmb umaaiom!";
    let shift = 8;
    let encode = false;
    let actual = caesar(input, shift, encode);
    let expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
  //test for spaciing and symbols $
  it("spaces and nonalphabetic symbols should be maintained", () => {
    //follow the same "let" as before 
    let input = "$%#@! &*%$ #@!$#";
    let shift = -3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "$%#@! &*%$ #@!$#";
    //actual = expected 
    expect(actual).to.equal(expected);
    });
  //test for cap letters to be ignored.
  //need to have two input for CAP and lowercase
  it("should ignore capital letters", () => {
    //follow same "let as above need to have two inputs on this test"
    let input1 = "A Message";
    let input2 = "a message";
    let shift = 3;
    let endcode = true;
    let actual = caesar(input1, shift, endcode);
    let expected = caesar(input2, shift, endcode);
    // act = exp 
    expect(actual).to.equal(expected);
  });
  //test for allowing wrap around the alphabet z-c 
  it("should be able to handle shift that go pass the alphabet", () => {
    //follow same "let"
    let input1 = "z";
    let shift = 3;
    let endcode = true;
    let actual = caesar(input1, shift, endcode);
    let expected = "c";
    //act = exp
    expect(actual).to.equal(expected);
  });
}); 
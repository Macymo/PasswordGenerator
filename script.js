// Assignment Code
var genButton = document.querySelector("#generate");
console.log("generate button");
var passwordText = document.querySelector("#password");


//Password characters
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var numericChar= "1234567890".split("");
var specialChar= "~!@#$%^&*()_+".split("");


function getPasswordInputs(){
  var passwordLength = prompt("How many characters between 8 - 128 do you want in your passwork");
//  console.log(passwordLength);

  var lowerCase = comfirm ("Do you want lowercase letters in your password?");
  var upperCase = comfirm ("Do you want uppercase letters in your password?");
  var numbers = comfirm ("Do you want numbers in your password?");
  var specialCharacters = comfirm ("Do you want special characters in your password?");
  return{
  passwordLength: passwordLength,
  lowerCase: lowerCase,
  upperCase: upperCase,
  numbers: numbers,
  special: special
  };
};


genButton.addEventListener("click",function() {
  var options = getPasswordInputs();
});



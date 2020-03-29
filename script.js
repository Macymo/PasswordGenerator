// Assignment Code
//Password characters
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numericChar= "1234567890";
var specialChar= "~!@#$%^&*()_+";

// Questions for the user to answer
/* REWROTE MY PROMPT/CONFIRM BECAUSE THIS CODE WAS NOT WORKING
var userInput = {
  passwordLength: function() {
    prompt("How many characters would you like your password to contain?");
  },
  specChar: function() {
    confirm("Click 'Ok' to confirm including special characters.");
  },
  inclNum: function() {
    confirm("Click 'Ok' to confirm including numbers.");
  },
  inclLower: function() {
    confirm("Click 'Ok' to confirm including lowercase letters.");
  },
  inclUpper: function() {
    confirm("Click 'Ok' to confirm incuding uppercase letters.");
  }
};
passwordLength();
specChar();
inclNum ();
inclLower();
inclUpper();
*/

//THIS DIDNT WORK EITHER
function userInput (){
  var passwordLength = prompt("How many characters would you like your password to contain?");
  var specChar = confirm("Click 'Ok' to confirm including special characters.");
  var inclNum = confirm("Click 'Ok' to confirm including numbers.");
  var inclLower = confirm("Click 'Ok' to confirm including lowercase letters.");
  var inclUpper = confirm("Click 'Ok' to confirm incuding uppercase letters.");
}; 

var characters = "" ;
if (specChar) {
}

 return {length: passwordLength, characters: specChar};
}; 

function generatePassword(length,characters) {
  var password = "" ;
  for ( var counter = 0; counter < length; counter++){
// step 1 random index
  var index = Math.floor(Math.random()*characters.length);
//step 2 get random character
  var getRandomCharacter = characters[index];
//step 3 add to the end of the password
  password = password + getRandomCharacter;
  }
  return password;

};

// generate & write password
function writePassword() {
  var pass = userInput();
  var password = generatePassword(pass.length,pass.characters);
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
  };


var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


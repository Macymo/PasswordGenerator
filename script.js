// Assignment Code
var genButton = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


//Password characters
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var numericChar= "1234567890".split("");
var specialChar= "~!@#$%^&*()_+".split("");


  function getPasswordInputs(){
    var passwordLength = prompt("How many characters between 8 - 128 do you want in your password?");
    passwordLength = parseInt(passwordLength);

    if (isNaN(passwordLength) === true) {
      alert ("Password length must be a number.");
      return undefined;
    };

    if (passwordLength < 8){
      alert ("Password length must be at least 8 characters long.");
      return undefined;
    };

    if (passwordLength > 128){
      alert ("Password length must be equal to or less than 128.");
      return undefined;
    };

    var lowerCase = confirm ("Do you want lowercase letters in your password?");
    var upperCase = confirm ("Do you want uppercase letters in your password?");
    var numbers = confirm ("Do you want numbers in your password?");
    var specialCharacters = confirm ("Do you want special characters in your password?");

    if (lowerCase === false && 
        upperCase === false &&
        numbers === false &&
        specialCharacters === false) {
          alert ("At least one character type must be selected");
          return undefined;
    };

    return{
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numbers: numbers,
    specialCharacters: specialCharacters
    };
  };

 function getRandomPassword(array) {
    var randomIndex = Math.floor(Math.random()* array.length);
    var randomCharacter = array[randomIndex];
      return randomCharacter;
  };

  genButton.addEventListener("click",function() {
    var options = getPasswordInputs();
    var result = [];
    var pickedCharacters = [];
    var guaranteedCharacters = [];

      if (options === undefined) {
        return;
      };
      if (options.lowerCase === true) {
        pickedCharacters = pickedCharacters.concat(lower);
        var randomCharacter = getRandomPassword(lower);
        guaranteedCharacters.push(randomCharacter);
      };

      if (options.upperCase === true) {
        pickedCharacters = pickedCharacters.concat(upper);
        var randomCharacter = getRandomPassword(upper);
        guaranteedCharacters.push(randomCharacter);
      };

      if (options.numbers === true) {
        pickedCharacters = pickedCharacters.concat(numericChar);
        var randomCharacter = getRandomPassword(numericChar);
        guaranteedCharacters.push(randomCharacter);
      };

      if (options.specialCharacters === true) {
        pickedCharacters = pickedCharacters.concat(specialChar);
        var randomCharacter = getRandomPassword(specialChar);
        guaranteedCharacters.push(randomCharacter);
      };
    
      for(var i = 0; i < options.passwordLength; i++) {
          var randomCharacter = getRandomPassword(pickedCharacters);
          result.push(randomCharacter);
      };

      for (var j = 0; j < guaranteedCharacters.length; j++) {
          result[j] = guaranteedCharacters[j];
      }

      result = result.join("");

      passwordText.value = result;

  });


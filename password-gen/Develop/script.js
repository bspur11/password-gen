// Assignment Code
var generateBtn = document.querySelector("#generate");
const generateButton = document.getElementById('generateBtn')
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passwordLength = prompt("How long would you like your Password?  Please enter a number between 8 and 128");


  var lowerCases = confirm("Would you like Capital Letters?");

  var numbers = confirm("Would you like numbers?");

  var upperCases = confirm("Would you like Upper Case Letters?");

  var special = confirm("would you like Special Characters?");

  var minimumCount = 0;

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  //  the Math functions
  var functionArray = {

    getNumbers: function () {

      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    },

    getUpperCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    },

    getLowerCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    },

    getSpecialCharacters: function () {
      return String.fromCharCode(Math.floor(Math.random() * 33) + 14)

    }
  };

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}

// Add event listener to generate button
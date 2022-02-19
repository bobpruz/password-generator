// assigned character strings into variables
var upperCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!@#$%^&*()_+-=[]{},./?";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Request Password Options
function getPasswordOptions() {
  var len = prompt("Enter the password length between 8 and 128 characters.");

if (isNaN(len) === true) {
  var len = prompt("Password length must a number. Please enter a password length between 8 and 128 characters. ");
}
if (len < 8 || len > 128) {
  var len = prompt("Password length must be between 8 and 128 characters. Please enter a password length between 8 and 128 characters.")
}

var incUpper = confirm("You would like to use upper case characters?");
var incLower = confirm("You would like to use lower case charcters?");
var incSpecial = confirm("You would like to use special characters?");
var incNumeric = confirm("You would like to use numbers?");

if (incUpper === false && incLower === false && incSpecial === false && incNumeric === false) {
  prompt("You must choose one option.")
}


var options = {
  len: len,
  incUpper: incUpper,
  incLower: incLower,
  incNumeric: incNumeric,
  incSpecial: incSpecial
}

return options;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

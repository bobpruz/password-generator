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
  var len = getPasswordLength();

  var incUpper = confirm(
    "You would like to use upper case characters?\r\nOK = Yes    Cancel = No"
  );
  var incLower = confirm(
    "You would like to use lower case charcters?\r\nOK = Yes    Cancel = No"
  );
  var incSpecial = confirm(
    "You would like to use special characters?\r\nOK = Yes    Cancel = No"
  );
  var incNumeric = confirm(
    "You would like to use numbers?\r\nOK = Yes    Cancel = No"
  );

  var options = {
    len: len,
    incUpper: incUpper,
    incLower: incLower,
    incNumeric: incNumeric,
    incSpecial: incSpecial,
  };

  return options;
}

// Generate Password From Options
function generatePassword() {
  // fetch options given by user
  var userOptions = getPasswordOptions();

  // Initialize Password Variable
  var password = "";

  // Initialize passwordOptions Variable
  var passwordOptions = "";

  if (
    userOptions["incUpper"] === false &&
    userOptions["incLower"] === false &&
    userOptions["incSpecial"] === false &&
    userOptions["incNumeric"] === false
  ) {
    return "You have to choose at least one option.\nPlease try again.";
  } else{
    if (userOptions["incUpper"]) {
      passwordOptions = passwordOptions + upperCase;
    }

    if (userOptions["incLower"]) {
      passwordOptions = passwordOptions + lowerCase;
    }

    if (userOptions["incSpecial"]) {
      passwordOptions = passwordOptions + special;
    }

    if (userOptions["incNumeric"]) {
      passwordOptions = passwordOptions + numeric;
    }

    // loop creating password
    for (var i = 0; i < userOptions["len"]; i++) {
      var passwordCharIndex = Math.floor(
        Math.random() * passwordOptions.length
      );
      password = password + passwordOptions[passwordCharIndex];
      console.log(i);
    }

    return password;
  }
}

// function to get password length
var getPasswordLength = function () {
  var len = prompt("Enter the password length between 8 and 128 characters.");

  if (isNaN(len) === true) {
    var len = prompt(
      "Password length must a number. Please enter a password length between 8 and 128 characters. "
    );
  }
  if (len < 8 || len > 128) {
    var len = prompt(
      "Password length must be between 8 and 128 characters. Please enter a password length between 8 and 128 characters."
    );
  }
  return len;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

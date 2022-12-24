// Assignment code here
function generatePassword() {

  //Window prompts to have user select length and what type of characters they'd like in their password
  var pwLength = window.prompt("How long would you like your password?", "Number from 8 to 128");
  if (!pwLength) {
    return "Try Again." // if user selects 'cancel' then we display 'Try Again.'
  }
  var numeric = window.confirm("Would you like to add numbers? (0 - 9)");
  var special = window.confirm("Would you like to add special characters? ( !, #, &, etc.)");
  var lowerCase = window.confirm("Would you like to add lowecase letters? (a - z)");
  var upperCase = window.confirm("Would you like to add UPPERCASE letters? (A - Z)");

  // Displays a message if user does not select a valid length or doesn't select a type of character
  if ((pwLength > 128 || pwLength < 8 || isNaN(pwLength)) && (!special && !numeric && !lowerCase && !upperCase)) {
    return "Your selection must be a number from 8 - 128. You must select OK on at least one character option.";
  }
  else if ((!special && !numeric && !lowerCase && !upperCase)) {
    return "You must select OK on at least one option from numbers, special characters, lowercase, or UPPERCASE.";
  }
  else if (pwLength > 128 || pwLength < 8 || isNaN(pwLength)) {
    return "Your selection must be a number from 8 - 128.";
  }

  // Possible characters
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChars = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  // initial array of user selected possible characters in password
  var includedChars = [];

  // Initial password
  var generatedPassword = '';

  // If user selects a category, its array is added to initial possible characters array
  if (numeric) {
    includedChars = includedChars.concat(numbers)
  }
  if (special) {
    includedChars = includedChars.concat(specialChars)
  }
  if (lowerCase) {
    includedChars = includedChars.concat(lowerCaseChars)
  }
  if (upperCase) {
    includedChars = includedChars.concat(upperCaseChars)
  }

  // Loop selects a random character from includedChars array for the length the user selects and adds it to the initial password
  for (var i = 0; i < pwLength; i++) {
    var randomChars = Math.floor(Math.random() * (includedChars.length));
    generatedPassword += includedChars[randomChars];
  }
  //displays generated password
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

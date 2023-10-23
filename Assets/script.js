var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var length = prompt ("Enter the lenght of the password (between 8 and 128 characters):");
    if (length < 8) {
        alert("Please enter a number greater than 7.")
    } else if (length > 128) {
        alert("Please enter a number less than 129.")
    } else if (isNaN(length)) {
        alert("Please enter a valid number between 8 and 128.");
    }
    return '';
}

generateBtn.addEventListener("click", writePassword);

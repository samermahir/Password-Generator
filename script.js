
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

function getRandomInt(max) {
return Math.ceil(Math.random() * max)
}

function typePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", typePassword);


function generatePassword() {
//Allows users to choose a password at a certain length
var passwordLength = prompt("Password length must be between (8 - 128)", '12');

//Allows users to choose uppercase  
var useUppercase = confirm("Would you like to include upppercase letters?")

//Allows users to choose lowercase
var useLowercase = confirm("Would you like to include lowercase letters?")

//Allows users to choose numbers
var useNumbers = confirm("Would you like to include numbers?")

//Allows users to choose special characters
var useSpecialChars = confirm("Would you like to include special characters?")

var potentialChars = []
if (useUppercase) {
    potentialChars = potentialChars.concat(uppercase)
}
if (useLowercase) {
    potentialChars = potentialChars.concat(lowercase)
}
if (useNumbers) {
    potentialChars = potentialChars.concat(numbers)
}
if (useSpecialChars) {
    potentialChars = potentialChars.concat(special)
}



var password = ''
for (var i = 0; i < passwordLength; i++) {
    console.log(getRandomInt(potentialChars.length))
    password = password + potentialChars[getRandomInt(potentialChars.length)]
}

return password

}
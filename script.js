var generateBtn = document.querySelector("#generate");

var passText = {

  psdLength: 0,

  psdLower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  psdUpper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  psdNumb: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  psdChar: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}

function writePassword() {

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var result = "";

  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  passwordLength = 0;
  psdCriteria.psdLength = 0;
  result = "";

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want? \nPassword must be between 8 and 128 characters.");

    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
  
      if (!isFinite(passwordLength)) {
        alert("Your password must include a number");
        return "Your secure password";
      }
      else {
       
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {

          
          showPrompts();

        
          while (psdCriteria.psdLength < passwordLength) {
             
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must complete one of the criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
             
              if (lowerCase === true && psdCriteria.psdLength < passwordLength) {
                var lc = psdCriteria.psdLower[Math.floor(Math.random() * 26)]
                result = result + lc;
                psdCriteria.psdLength++;
              }
        
              if (specialChar === true && psdCriteria.psdLength < passwordLength) {
                var sc = psdCriteria.psdChar[Math.floor(Math.random() * 32)]
                result = result + sc;
                psdCriteria.psdLength++;
              }
 
              if (upperCase === true && psdCriteria.psdLength < passwordLength) {
                var uc = psdCriteria.psdUpper[Math.floor(Math.random() * 26)]
                result = result + uc;
                psdCriteria.psdLength++;
              }

              if (numbers === true && psdCriteria.psdLength < passwordLength) {
                var num = psdCriteria.psdNumb[Math.floor(Math.random() * 10)]
                result = result + num;
                psdCriteria.psdLength++;
              }
            }
          }
        }
      }
    }

    return result;

    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");
    }
  }
}
// Assignment code here
var characters = {
  lowCase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  special: [
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ],
};

function generatePassword() {
  var lowYes = confirm("Would you like to include lower case letters?");
  var upYes = confirm("Would you like to include capital letters?");
  var numYes = confirm("Would you like to include numbers?");
  var charYes = confirm("Would you like to include special characters?");

  while (true) {
    if (!lowYes && !upYes && !numYes && !charYes) {
      alert("Please choose atleast one parameter");
      lowYes = confirm("Would you like to include lower case letters?");
      upYes = confirm("Would you like to include capital letters?");
      numYes = confirm("Would you like to include numbers?");
      charYes = confirm("Would you like to include special characters?");
    } else {
      break;
    }
  }

  console.log(lowYes);
  console.log(upYes);
  console.log(numYes);
  console.log(charYes);
  console.log(amount);

  var amount = prompt(
    "How long is your password? Please choose a value between 8 and 128"
  );

  var password = "";
  while (true) {
    if (amount < 8 || amount > 128) {
      alert("Please choose a value between 8 and 128.");
      amount = prompt(
        "How long is your password? Please choose between 8 and 128."
      );
    } else {
      break;
    }
  }

  for (var i = 0; i < amount; i++) {
    var exists = false;
    var selection = "";
    while (true) {
      // random number between 0 -3
      var choice = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

      switch (choice) {
        case 0:
          // lowercase logic
          if (lowYes) {
            selection =
              characters.lowCase[
                Math.floor(Math.random() * characters.lowCase.length)
              ];
            exists = true;
          }
          break;
        case 1:
          // Capital logic
          if (upYes) {
            selection = characters.lowCase[
              Math.floor(Math.random() * characters.lowCase.length)
            ].toUpperCase();
            exists = true;
          }
          // Number logic
          break;
        case 2:
          if (numYes) {
            selection =
              characters.numbers[
                Math.floor(Math.random() * characters.numbers.length)
              ];
            exists = true;
          }
          break;
        // character logic
        case 3:
          if (charYes) {
            selection =
              characters.special[
                Math.floor(Math.random() * characters.special.length)
              ];
            exists = true;
          }
          break;
        default:
          console.log("whoops");
      }
      if (exists) {
        break;
      }
    }
    password += selection;
  }
  console.log(password);
  return password;
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

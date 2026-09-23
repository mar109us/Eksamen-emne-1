function encrypt(text) {
   return rotateText(text, "encrypt");
}

function decrypt(text) {
   return rotateText(text, "decrypt");
}

function rotateText(text, mode) {
   let tempText = "";
   for (let char of text) {
      tempText += rotateChar(char, mode);
   }
   return tempText;
}

function rotateChar(char, mode) {
   let currentCase = isLowerOrUpper(char); // find correct reference path
   if (!currentCase.includes(char)) return char; // early return if char is special char
   else {
      let newChar = "";
      if (mode === "encrypt") {
         newChar = currentCase.indexOf(char) + app.shiftValue;
         if (newChar >= app.alphabetLength) newChar = newChar - app.alphabetLength; // if outside range
         newChar = currentCase.charAt(newChar);
      }
      if (mode === "decrypt") {
         newChar = currentCase.indexOf(char) - app.shiftValue;
         if (newChar < 0) newChar = app.alphabetLength + newChar; // if outside range
         newChar = currentCase.charAt(newChar);
      }
      return newChar;
   }
}

function isLowerOrUpper(char) {
   if (app.alphabetLower.includes(char)) {
      return app.alphabetLower;
   } else {
      return app.alphabetUpper; // no statement since its either upper or special char
   }
}

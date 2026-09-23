function encrypt(text) {
   return rotateText(text, "encrypt");
}

function decrypt(text) {
   return rotateText(text, "decrypt");
}

function rotateText(text, mode) {
   let textCopy = text;
   let tempText = "";
   for (let char of textCopy) {
      tempText += rotateChar(char, mode);
   }
   return tempText;
}

function rotateChar(char, mode) {
   let lowerCase = app.alphabetLower
   let upperCase = app.alphabetUpper
   let newChar;
   if (lowerCase.includes(char)) {
      let index = lowerCase.indexOf(char);
      if (mode === "encrypt") {
         newChar = index + app.shiftValue;
         if (newChar >= app.alphabetLength) newChar = newChar - app.alphabetLength;
      }
      if (mode === "decrypt") {
         newChar = index - app.shiftValue;
         if (newChar < 0) newChar = app.alphabetLength + newChar;
      }
      newChar = app.alphabetLower.charAt(newChar);
      return newChar;
   }
   if (upperCase.includes(char)) {
      let index = upperCase.indexOf(char);
      if (mode === "encrypt") {
         newChar = index + app.shiftValue;
         if (newChar >= app.alphabetLength) newChar = newChar - app.alphabetLength;
      }
      if (mode === "decrypt") {
         newChar = index - app.shiftValue;
         if (newChar < 0) newChar = app.alphabetLength + newChar;
      }
      newChar = upperCase.charAt(newChar);
      return newChar;
   }
   return char;
}

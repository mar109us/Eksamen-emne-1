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
   if (!currentCase.includes(char))
      return char; // early return if char is special char
   else {
      let newChar = "";
      if (mode === "encrypt") {
         newChar = currentCase.indexOf(char) + app.shiftValue;
         if (newChar >= alphabet.length) newChar = newChar - alphabet.length; // if outside range
         newChar = currentCase.charAt(newChar);
      }
      if (mode === "decrypt") {
         newChar = currentCase.indexOf(char) - app.shiftValue;
         if (newChar < 0) newChar = alphabet.length + newChar; // if outside range
         newChar = currentCase.charAt(newChar);
      }
      return newChar;
   }
}

function isLowerOrUpper(char) {
   if (alphabet.lower.includes(char)) {
      return alphabet.lower;
   } else {
      return alphabet.upper; // no statement since its either upper or special char
   }
}

function encrypt(text) {
   return rotateText(text);
}

function decrypt(text) {
   return rotateText(text);
}

function rotateText(text) {
   let textCopy = text;
   let tempText = "";
   for (let char of textCopy) {
      tempText += rotateChar(char);
   }
   return tempText;
}

function rotateChar(char) {
   const alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
   let newChar
   let inputIndex = alphabet.indexOf(char);
   newChar = inputIndex + 14
   if (newChar > 29) newChar -= 29
   console.log(char);
   console.log(inputIndex);
   console.log(newChar);
   
   return alphabet.charAt(newChar);
}

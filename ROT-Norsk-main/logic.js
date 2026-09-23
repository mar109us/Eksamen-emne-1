function encrypt(text) {
   return rotateText(text);
}

function decrypt(text) {
   return rotateText(text);
}

function rotateText(text) {
   let textCopy = text
   let tempText = ""
   for (let char of textCopy) {
      tempText += rotateChar(char)
   }
   return tempText
}

function rotateChar(char) {
   const alphabet = "abcdefghijklmnopqrstuvwxyzæøå";
   alphabet.indexOf(char)
   return alphabet.indexOf(char)
}

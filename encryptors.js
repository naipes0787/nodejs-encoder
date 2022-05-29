// Encryption Functions
module.exports = {
  caesarCipher,
  symbolCipher,
  reverseCipher,
};

/**
 * The caesar cipher consist in changing every character, shifting them to the received number as a parameter
 * @param {string} str The string to be encrypte<
 * @param {number} amount The amount of character to be shifted
 * @returns The encrypted string using caesar cipher
 */
function caesarCipher(str, amount = 0) {
  if (amount < 0) {
    return caesarCipher(str, amount + 26);
  }
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += char;
  }
  return output;
}

/**
 * The symbol encrypter replace some characters by symbols
 * @param {string} str The string to be encrypted
 * @returns The encrypted string using symbol cipher
 */
function symbolCipher(str) {
  const symbols = {
    i: "!",
    "!": "i",
    l: "1",
    1: "l",
    s: "$",
    $: "s",
    o: "0",
    0: "o",
    a: "@",
    "@": "a",
    e: "3",
    3: "e",
    b: "6",
    6: "b",
  };

  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.toLowerCase()[i];

    if (symbols[char]) {
      output += symbols[char];
    } else {
      output += char;
    }
  }
  return output;
}

/**
 * The reverse encrypter turn around the string, beggining from the end
 * @param {string} str The string to be encrypted
 * @returns The encrypted string using reverse cipher
 */
function reverseCipher(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
}

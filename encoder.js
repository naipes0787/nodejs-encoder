const { caesarCipher, symbolCipher, reverseCipher } = require("./encryptors");
// Interface to read the user input and show the questions from the terminal
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Giving the option selected, this function executes the chosen cipher method and print the output
 * @param {number} userInput The selected option by the user
 */
const handleOption = (userInput) => {
  if (userInput < 1 || userInput > 4) {
    process.stdout.write("\nInvalid option.\n\n");
    getCipherMethod();
  } else {
    let outputWord = "";
    readline.question(`What word do you want to encrypt?\n> `, (word) => {
      if (userInput == 1) {
        outputWord = caesarCipher(word, 5);
      }
      if (userInput == 2) {
        outputWord = symbolCipher(word);
      }
      if (userInput == 3) {
        outputWord = reverseCipher(word);
      }
      if (userInput == 4) {
        outputWord = reverseCipher(symbolCipher(caesarCipher(word, 5)));
      }
      console.log(`\nThe encrypted word is: ${outputWord}`);
      readline.close;
      process.exit();
    });
  }
};

const getCipherMethod = () => {
  readline.question(
    `What cipher do you want to use?\n\n[1] Caesar\n[2] Symbol\n[3] Reverse\n[4] Mix\n> `,
    handleOption
  );
};

getCipherMethod();

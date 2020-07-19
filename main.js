let playerName = prompt("What is your name?");
console.log("Hello" + " " + playerName);

//Pick a random word
let wordList = [
  "command",
  "jail",
  "compare",
  "hurried",
  "expand",
  "beds",
  "snails",
  "extra",
  "small",
  "nose",
  "ubiquitous",
  "satisfying",
  "ski"
];

let randomWord = wordList[Math.floor(Math.random() * wordList.length)];

let answerArray = [];
for (let i = 0; i < wordList.length; i++) {
  answerArray[i] = "_";
}

let remainingLeters = randomWord.length;

// While the word has not been guessed {
while (remainingLetters > 0) {
  alert(answerArray.join(" "));
}

let guess = prompt("pick a letter or press cancel to exit the game.");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
      alert("Only one letter at a time please.");
  } else // update game status




  // Show the player their progress
  // Take input from the player
  // Update answerArray and remainingLetters for every correct guess

/*
  If the player wants to quit the game {
    Quit the game
  }
  Else If the guess is not a single letter {
    Tell the player to pick a single letter
  }
  Else {
    If the guess is in the word {
      Update the player's progress with the guess
    }
  }
}
*/

// Congratulate the player on guessing the word
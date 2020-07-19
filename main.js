  //grab the players name
  let playerName = prompt("What is your name?");
  alert("Hello" + " " + playerName);

  //word options
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
    "ski",
  ];

  //pick a random word from wordList
  let randomWord = wordList[Math.floor(Math.random() * wordList.length)];

  //create an array of "_" for the blank answer
  let answerArray = [];
  for (let i = 0; i < wordList.length; i++) {
    answerArray[i] = "_";
  }

  let remainingLetters = randomWord.length;

  //join letters in the array to create remainingLetters
  while (remainingLetters > 0) {
    //show the player their progress
    alert(answerArray.join(" "));
  }

  //player inputs a letter
  let guess = prompt("pick a letter or press cancel to exit the game.");
  //if (guess === null) {
  //exit the game
  //break;
  /*} else*/ if (guess.length !== 1) {
    alert("Only one letter at a time please.");
  } else {
    // update game status with the players guess
    for (let j = 0; j < randomWord.length; j++) {
      if (randomWord[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }

  //show the answer array and congratulate player
  alert(answerArray.join(" "));
  alert("Well done, the answer was " + randomWord);

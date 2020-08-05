export default (state = [], action) => {
  const { word, index } = action;
  switch (action.type) {
    case "SET_WORD":
      let guessedLetters = [];
      let letters = [...word];
      letters.forEach((letter) => {
        guessedLetters.push({ letter, guessed: false });
      });

      return guessedLetters;

    case "RIGHT":
      let guessed = [...state];
      guessed[index].guessed = true;
      return guessed;

    case "RESET":
      return [];

    default:
      return state;
  }
};

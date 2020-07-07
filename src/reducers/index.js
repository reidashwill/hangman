import { combineReducers } from 'redux';
import guessedLetterReducer from "./guessed-letter-reducer";
import livesReducer from './lives-reducer'
import wordToGuessReducer from './words-to-guess-reducer'
import winReducer from './win-reducer'
import gameReducer from './toggle-game-reducer'


const rootReducer = combineReducers({
  guessedLetters: guessedLetterReducer,
  lives: livesReducer,
  wordToGuess: wordToGuessReducer,
  win: winReducer,
  game: gameReducer
});

export default rootReducer
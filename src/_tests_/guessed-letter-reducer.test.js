import guessedLetterReducer from '../reducers/guessed-letter-reducer'

describe('guessedLetterReducer', () => {
  test('should return default state if there is no action passed into reducer', () => {
    expect(guessedLetterReducer([], {type: null})).toEqual([]);
  });

  test('should return an array containing one letter if the action is given a letter', ()=> {
    expect(guessedLetterReducer([], {type:'ADD_LETTER', letter:"a"})).toEqual(["a"])
  })

  test('should return an empty array when passed the RESET action', () => {
    expect(guessedLetterReducer(['a','b'], {type: 'RESET'})).toEqual([])
  })
});

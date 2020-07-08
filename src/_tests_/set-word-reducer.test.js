import setWordReducer from '../reducers/words-to-guess-reducer'

describe('set-word-reducer', ()=>{
  

  test('should return default state if no action if passed', () => {
    expect(setWordReducer([], {type: null})).toEqual([])
  })

  test('should return an array of objects with a letter and a boolean', () => {
    expect(setWordReducer([], {type: "SET_WORD", word:"eric"})).toEqual([{letter: 'e', guessed: false},{letter: 'r', guessed: false},{letter: 'i', guessed: false},{letter: 'c', guessed: false}])
  })

  test('should return an epty array when passed the reset action', () => {
    expect(setWordReducer([{letter: 'e', guessed: false},{letter: 'r', guessed: false},{letter: 'i', guessed: false},{letter: 'c', guessed: false}], {type: "RESET"})).toEqual([])
  })

  test('should should set the boolean value of guessed to true of the index of the array that is passed into the RIGHT action', () => {
    expect(setWordReducer([{letter: 'e', guessed: false},{letter: 'r', guessed: false},{letter: 'i', guessed: false},{letter: 'c', guessed: false}], {type: 'RIGHT', index : 1})).toEqual([{letter: 'e', guessed: false},{letter: 'r', guessed: true},{letter: 'i', guessed: false},{letter: 'c', guessed: false}])
  })
})
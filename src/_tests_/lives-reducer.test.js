
import livesReducer from "../reducers/lives-reducer";
describe('guessedLetterReducer', () => {
  test('should return default state if there is no action passed into reducer', () => {
    expect(livesReducer(5, {type: null})).toEqual(5);
  });
 test('should return a number that is one less than the state', ()=> {
    expect(livesReducer(5, {type:'LOSE_LIFE'})).toEqual(4)
  })
 
  test('should return 5 when passed the RESET action', () => {
    expect(livesReducer(0, {type: 'RESET'})).toEqual(5)
  })
});

import toggleGameReducer from "../reducers/toggle-game-reducer";
describe('toggleGameReducer', () => {
  test('should return default state if there is no action passed into the reducer', () => {
    expect(toggleGameReducer(false, {type: null})).toEqual(false);
  })

  test('should return the opposite state if passed the toggle action', ()=> {
    expect(toggleGameReducer(false, {type: "TOGGLE"})).toEqual(true)
  })

  test('should return false when passed the RESET action', () => {
    expect(toggleGameReducer(true, {type: 'RESET'})).toEqual(false)
  })
})
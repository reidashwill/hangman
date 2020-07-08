import winReducer from "../reducers/win-reducer";

describe('winReducer', () => {
  test('should return default state if there is no action passed into the reducer', () => {
    expect(winReducer(false, {type: null})).toEqual(false);
  })

  test('should return the true if passed the set win', ()=> {
    expect(winReducer(false, {type: "SET_WIN"})).toEqual(true)
  })

  test('should return false when passed the RESET action', () => {
    expect(winReducer(true, {type: 'RESET'})).toEqual(false)
  })
})
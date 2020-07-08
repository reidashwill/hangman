export const setWord = (word) => ({ type: "SET_WORD", word })

export const reset =()=> ({type:'RESET'})

export const right =(index)=> ({type:"RIGHT",index}) 

export const toggle = () => ({type: 'TOGGLE'})

export const setWin = () => ({type: 'SET_WIN'})

export const loseLife = () => ({type: 'LOSE_LIFE'})

export const addLetter = (letter) => ({type:"ADD_LETTER", letter})
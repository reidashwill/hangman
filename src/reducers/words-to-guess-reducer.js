export default (state=[], action)=>{
  const {word, index} = action;
  switch (action.type) {
    case "SET_WORD":
      let temp=[]
     let letters= [...word]
      letters.forEach(letter => {
        temp.push({letter, guessed:false})
        
      });

      return temp;

    case "RIGHT":
      let guessed = [...state];
      guessed[index].guessed = true;
      return guessed;

    case "RESET":
      return [];
   
    default:
      return state;
  }
}
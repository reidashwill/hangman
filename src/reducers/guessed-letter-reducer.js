export default (state=[], action)=>{
  const {letter} = action;
  switch (action.type) {
    case "ADD_LETTER":
      let temp=[...state]
      if(!temp.includes(letter)){
        temp.push(letter)
      }
      return temp;

    case "RESET":
      return [];
   
    default:
      return state;
  }
}
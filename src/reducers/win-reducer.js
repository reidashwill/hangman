export default (state=false, action)=>{
  switch (action.type) {
    case "SET_WIN":
       return true;
    case "RESET":
      return false;
    default:
      return state;
  }
}
export default (state=5, action)=>{
 switch(action.type){
   case "LOSE_LIFE":
     let temp = state;
     if(temp>0){
       temp -= 1
     }
     return temp;

   case "RESET":
     return 5;  

    default:
      return state
 }
}
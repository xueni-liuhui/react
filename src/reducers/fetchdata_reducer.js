 const  fetchReducer=(state={list:[{title:"Hello"}]} ,action)=>{
  switch(action.type){
  case "FETCH_DATA":
    return {
      ...state ,list:action.payload
    };
  default:
    return state;
  }
}
export default fetchReducer

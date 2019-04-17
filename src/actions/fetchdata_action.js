import {fetchData} from '../http/http';
const fetchDataAction = async (dispatch)=>{
      const res=await fetchData()
      dispatch({
        type:"FETCH_DATA",
        payload:res.data
      })
}
export default fetchDataAction

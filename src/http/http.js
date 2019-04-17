import axios from  'axios';

//发送API请求
export function fetchData() {
  return axios.get("http://jsonplaceholder.typicode.com/posts");
}

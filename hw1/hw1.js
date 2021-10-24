import axios from "axios";
const getData = async(user_id)=>{
    let {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    let {data:posts}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
    let obj={user,posts};
    return obj;
}
export default getData;
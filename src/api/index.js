import axios from 'axios'
export const fetchUser = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/1`) 
    .then(resp => resp.json())
    .then(data => this.setState({ data}))
    .catch(err => new Error(err))
   
}
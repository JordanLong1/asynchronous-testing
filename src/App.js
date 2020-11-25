import React from 'react'; 
import axios from 'axios'
import {fetchUser} from './api/index'
class App extends React.Component {

    state = {user: null}


    componentDidMount() {
       axios.get(`https://jsonplaceholder.typicode.com/users/1`) 
       .then(resp => resp.json())
       .then(data => this.setState({user: data}))
       .catch(err => new Error(err))
     }

    render() {
        return this.state.user === null ?
         (
            <div className='app-container'>
                <p className='loading-paragraph'>Loading!</p>
            </div>
        )
        : (
            <div>
        <h4 className='header'>{this.state.user.name}</h4>
        
            </div>
        )
    }
}

export default App
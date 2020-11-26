import React from 'react'; 
import axios from 'axios'
import {fetchUser} from './api/index'

class App extends React.Component {

    state = {user: null}

    handleFetch = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/1`) 
        .then(resp => resp.json())
        .then(data => this.setState({user: data.name}))
        .catch(err => new Error(err))
    }


    componentDidMount() {
        this.handleFetch()
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
        <h4 className='header' data-test='user-name'>{this.state.user}</h4>
        
            </div>
        )
    }
}

export default App
import React, { Component } from 'react'
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      {name:'Rufusy', age:'23', belt:'black', id:'1'},
      {name:'Idachi', age:'23', belt:'red', id:'2'},
      {name:'Noshimori', age:'35', belt:'black', id:'3'}
    ]
  }
  render() {
    return (
        <div className="App">
            <h1> Ninja !! </h1>
            <Ninjas ninjas={this.state.ninjas}/>
         </div>
    )
  }
}

export default App

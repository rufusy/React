import React, { Component } from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'


class App extends Component {
  state = {
    ninjas: [
      {name:'Rufusy', age:'23', belt:'black', id:'1'},
      {name:'Idachi', age:'23', belt:'red', id:'2'},
      {name:'Noshimori', age:'35', belt:'black', id:'3'}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
        <div className="App">
            <h1> Ninja !! </h1>
            <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
            <AddNinja addNinja={this.addNinja}/>
        </div>
    )
  }
}

export default App

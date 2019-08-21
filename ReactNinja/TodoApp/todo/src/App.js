import React, { Component } from 'react'
import Todos from './Todos'
import Addtodo from './Addtodo'

export class App extends Component {
  state = {
    todos: [
      {id:1, content: 'Take out trash'},
      {id:2, content: 'Reply emails'}
    ]
  }

  deleteTodo = (id) => {
	let todos = this.state.todos.filter(todo => {
		return todo.id !== id
	})
	this.setState({todos:todos})
  }

  addTodo = (todo) => {
	todo.id = Math.random()
	let todos = [...this.state.todos, todo]
	this.setState({todos:todos})
  }

  render() {
    return (
      <div className="todo-app container">
		  	<h1 className="center blue-text">Todo's</h1>
			<Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
			<Addtodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App 


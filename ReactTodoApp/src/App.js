 /*eslint-disable no-undef */
import React, {Component} from 'react'
import Todos from './components/Todos'
import Addtodo from './components/Addtodo'
import Header from './components/layout/Header'

import './App.css';

class App extends Component
{
  state ={
    todos:[
      {
        id: 1,
        title:'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title:'Do laundry',
        completed: false
      },
      {
        id: 3,
        title:'Go for bike riding',
        completed: false
      },
      {
        id: 4,
        title:'Skype with girlfriend',
        completed: false
      },
      {
        id: 5,
        title:'Reply to emails',
        completed: false
      }
    ]
  }

  // Toggle complete
  markComplete = (id) => 
  {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id )
        {
            todo.completed =! todo.completed;
        }
        return todo;
        }) 
    });
  }

  // Delete Todo
  delTodo = (id) =>
  {
      this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)] 
    });
  }

  // add todo
  addtodo = (title) =>{
    const newTodo = {
        id: 6,
        title:title,
        completed: false
    }
    this.setState({todos:[...this.state.todos, newTodo]});
  }


  render()
  {
    return(
      <div className="App">
          <div className="container">
            <Header></Header>
            <Addtodo addtodo={this.addtodo}></Addtodo>
            <Todos  todos={this.state.todos} 
                    markComplete={this.markComplete} 
                    delTodo={this.delTodo}
            />
          </div>    
      </div>
    );
  }
}

export default App;

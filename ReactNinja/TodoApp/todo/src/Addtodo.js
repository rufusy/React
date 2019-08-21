import React, { Component } from 'react'

export class Addtodo extends Component {
    state = {
        content:null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Add new todo" id="content" type="text" className="validate" value={this.state.content} onChange={this.handleChange}/>
                        </div>
                        <div className="input-field col s6">
                            <button className="btn" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Addtodo


import React, { Component } from 'react'

export class Addtodo extends Component {
    state = {
        title:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addtodo(this.state.title);
        this.setState({title:''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input  style={{flex: '10', padding:'5px'}}
                            type="text"
                            name="title"
                            placeholder="Add todo.."
                            value={this.state.title} 
                            onChange={this.onChange}
                            />
                    <input type="submit" 
                            value="submit"
                            className="btn"
                            style={{flex: '1'}}/>
                </form>
            </div>
        )
    }
}

export default Addtodo

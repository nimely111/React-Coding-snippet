import React, { Component } from 'react';

class Class_Counter extends Component{
     state = {
        age: 0,
    }

    handleAgeChange = () => {
        this.setState({
            age: this.state.age + 1
        })
    }
    
    render(){
        return(
            <>
            <h1>Class Based Counter</h1>
                <button onClick={this.handleAgeChange}>
                    Increase Age
                </button>
                <p>You are {this.state.age} years old</p>
            </>
        )
    }
}

export default Class_Counter;

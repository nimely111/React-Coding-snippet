import React, { Component } from 'react';

class Class_Counter extends Component{
     state = {
        age: 42,
    }

    handleAgeChange = () => {
        this.setState({
            age: this.state.age + 1
        })
    }
    
    render(){
        return(
            <>
                <button onClick={handleAgeChange}>
                    Increase Age
                </button>
            </>
        )
    }
}

export default Class_Counter;

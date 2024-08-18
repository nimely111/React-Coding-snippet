import React, { Component } from "react";

class ClassStateComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    // increase Count
     increaseCount = () => {
        this.setState({count: this.state.count + 1})
    }
    
    // decrease Count
     decreaseCount = () => {
        this.setState({count: this.state.count - 1})
    }
    
    // reset Count
     setToZero = () => {
        this.setState({count: 0})
    }


    render(){
        return(
            <>
                  <h2>Using Class Based Component</h2>

                  <button style={{
                marginRight: '5px',
                padding: '7px 20px',
                background: 'blue',
                color: '#fff',
                fontSize: '20px'
            }} 
                onClick={
                this.decreaseCount
                }>-</button>

            <button style={{
                marginRight: '5px',
                padding: '7px 20px',
                background: 'blue',
                color: '#fff',
                fontSize: '20px'
            }}
                onClick={
                this.increaseCount
                }>+</button>

<button style={{
                marginRight: '5px',
                padding: '7px 20px',
                background: 'blue',
                color: '#fff',
                fontSize: '20px'
            }} 
                onClick={
                this.setToZero
                }>Reset</button>
             
            {this.state.count >= 0 ? <h2 
            style={{
                color: 'green'
                }}>
                The count is: { this.state.count }
                    </h2> :  
                    <h2 
            style={{
                color: 'red'
                }}>
                The count is: { this.state.count }
                </h2>}

            </>
        )
    }
}

export default ClassStateComponent
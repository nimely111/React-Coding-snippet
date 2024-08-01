import React, { Component } from "react";

class ClassStateComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }


    render(){
        return(
            <>
                  <h1>Welcome to my Counter App</h1>
                  <h2>Using Class Based Component</h2>
            </>
        )
    }
}

export default ClassStateComponent
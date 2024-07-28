import React, { Component } from 'react'
class Greetings extends Component{
    render(props){
        return <h1>Hello, { this.props.first_name }</h1>
    }
}
export default Greetings;



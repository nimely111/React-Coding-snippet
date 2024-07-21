import React, { Component } from 'react'

 class CompareClassToFunction extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "John",
      age: 100,
      isMale: true
    }
  }
  render() {
    // using modern destructuring syntax
    const { name, age, isMale } = this.state;

    return (
      <div>
        <h1>My name is {name} </h1>
        <h2>I am {age} years old</h2>
        <h3>I am a {isMale? "Male" : "Female"} </h3>
        <h4>I am felling {this.props.emotion}</h4>
      </div>
    )
    return (
      <div>
      <h1>My name is {this.state.name} </h1>
      <h2>I am {this.state.age} years old</h2>
      <h3>I am a {this.state.isMale ? "Male" : "Female"} </h3>
        <h1>Hello World from class</h1>
      </div>
    )
  }
}

export default CompareClassToFunction;

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
    const { emotion } = this.state;

    return (
      <div>
        <h1>My name is {name} </h1>
        <h2>I am {age} years old</h2>
        <h3>I am a {isMale? "Male" : "Female"} </h3>
        <h4>I am felling {emotion}</h4>
      </div>
    )
  }
}

export default CompareClassToFunction;

import React, { Component } from 'react'

 class CompareClassToFunction extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      age: 100,
      ismale: true
    }
  }
  render() {
    return (
      <div>
        <h1>Hello World from class</h1>
      </div>
    )
  }
}

export default CompareClassToFunction;

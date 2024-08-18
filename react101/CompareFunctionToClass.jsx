import React from 'react';
import { useState } from 'react';




function CompareFunctionToClass({ emotion, year, ...props }) {
  const [name, setName] = useState("Esther");
  const [age, setAge] = useState(100);
  const [isMale, setIsMale] = useState(false);

  return (
    <div>
      <h1>My name is {name} </h1>
      <h2>I am {age} years old</h2>
      <h3>I am a {isMale ? "Male" : "Female"} </h3>
      <h4>I am felling {emotion}</h4>
    </div>
  )
}

export default CompareFunctionToClass

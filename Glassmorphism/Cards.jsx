import "./glass.css";
import React from 'react';

function Cards() {
  return (
    <div className="card-container">
      <div className="card">
        <h2>Card 1</h2>
        <p>This is a description for card 1.</p>
      </div>
      <div className="card">
        <h2>Card 2</h2>
        <p>This is a description for card 2.</p>
      </div>
      <div className="card">
        <h2>Card 3</h2>
        <p>This is a description for card 3.</p>
      </div>
    </div>
  );
}

export default Cards;


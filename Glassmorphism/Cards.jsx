import "./Cards.css";
import React from 'react';

function Cards({title, description}) {
  return (
    <div className="card-container">
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Cards;


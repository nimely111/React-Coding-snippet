import "./Cards.css";
import React from 'react';

function Cards({title, description}) {
  return (
    <div className="card-container">
      <div className="card">
        <h2>
          <i>
          {title}
          </i>
        </h2>
        <p>
          <i>
          {description}
          </i>
        </p>
      </div>
    </div>
  );
}

export default Cards;


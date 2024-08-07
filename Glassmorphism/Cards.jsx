import "./Cards.css";
import React from 'react';

function Cards({title, description, price}) {
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
        <h1>
          <i>
            ${price}
          </i>
          </h1>
      </div>
    </div>
  );
}

export default Cards;


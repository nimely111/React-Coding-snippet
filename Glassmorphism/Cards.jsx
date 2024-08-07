import "./Cards.css";
import React from 'react';

function Cards({title, description, price}) {
  return (
    <div className="card-container">
      <div className="card">
        <p>
          <i>
          {title}
          </i>
        </p>
        <p>
          <i>
          {description}
          </i>
        </p>
        <h2>
          <i>
            ${price}
          </i>
          </h2>
      </div>
    </div>
  );
}

export default Cards;


import Button from "./Button";
import "./Cards.css";
import React from 'react';

function Cards({title, description, price}) {
  return (
    <div className="card-container">
      <div className="card">
        <p>
          <i>
          Title: {title}
          </i>
        </p>
        <p>
          <i>
          Description: {description}
          </i>
        </p>
        <h2>
          <i>
          Price: ${price}
          </i>
          </h2>
        <Button />
      </div>
    </div>
  );
}

export default Cards;


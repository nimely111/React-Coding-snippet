import Button from "./Button";
import "./Cards.css";
import React from 'react';
import ItemDescription from "./ItemDescription";

function Cards({title, description, price}) {
  return (
    <div className="card-container">
      <div className="card">
        <ItemDescription title={title} description={description} />
        <h3>Price: ${price}</h3>
        <Button />
      </div>
    </div>
  );
}

export default Cards;


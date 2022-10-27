import React from "react";

function PlantCard(props) {
  // console.log(props.plant)
const plantName= props.plant.name
const plantPrice= props.plant.price
const plantImage= props.plant.image
  return (
    <li className="card">
      <img src={plantImage} alt={"plant name"} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

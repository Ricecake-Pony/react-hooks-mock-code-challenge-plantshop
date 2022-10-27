import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
  // console.log(props.plants)
  const plants= props.plants.map(plant => {  
    return <PlantCard  plant={plant} /> 
  })
 
    return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;

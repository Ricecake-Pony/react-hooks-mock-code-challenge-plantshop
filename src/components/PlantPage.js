import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(props) {
const {searchFilter, plants}= props
  
  return (
    <main>
      <NewPlantForm 
      submitChange= {props.submitChange}
      />
      <Search searchFilter={searchFilter}/>
      <PlantList plants= {plants}/>
    </main>
  );
}

export default PlantPage;

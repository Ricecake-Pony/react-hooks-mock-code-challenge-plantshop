import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


//starting off with fetching.. Looks like that'll take majority of this test, as I've only done that once.
function App() {
  
  const baseUrl= "http://localhost:6001"
  const plantUrl= baseUrl + "/plants"

  const [plant, setPlant]= useState([])
  const [plantFilter, setPlantFilter]= useState("")

  useEffect(() => {
    fetch(plantUrl)
    .then(resp => resp.json())
    .then(plantData => setPlant(plantData))

  }, [])

function submitChange(newPlant){
  fetch(plantUrl,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    
    body: JSON.stringify(newPlant)
  }
  )
  setPlant((newPlant) => ([...plant, newPlant]))
}

  function searchFilter(e){
    setPlantFilter(e.target.value)
  }
  const filterPlants= plant.filter((singlePlant) => (singlePlant.name.toLowerCase().includes(plantFilter.toLowerCase())))
  
  return (
    <div className="app">
      <Header />
      <PlantPage 
      plants= {filterPlants} 
      submitChange= {submitChange}
      searchFilter={searchFilter}
      />
    </div>
  );
}

export default App;

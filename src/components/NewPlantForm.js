import React, {useState} from "react";

function NewPlantForm(props) {
  
  const [plantNameChange, setPlantNameChange]= useState("")
  const [plantImageChange, setPlantImageChange]= useState("")
  const [plantPriceChange, setPlantPriceChange]= useState("")

  const newPlant= {
    name: plantNameChange,
    image: plantImageChange,
    price: plantPriceChange
  }
  console.log(newPlant)
  
  function handlePlantNameChange(event){
    return (
      setPlantNameChange(event.target.value)
    )
  }

  function handlePlantImageChange(event){
    return (
      setPlantImageChange(event.target.value)
    )
  }

  function handlePlantPriceChange(event){
    return (
      setPlantPriceChange(parseFloat(event.target.value))
      //Have to use arrow keys "up" and "down" for the decimals after integer if you toFixed(2) it.
    )
  }

    function handleSubmitChange(event){
      event.preventDefault()
      props.submitChange(newPlant)
  }
    
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmitChange}>
        <input type="text" name="name" placeholder="Plant name" onChange={handlePlantNameChange} value={plantNameChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handlePlantImageChange} value={plantImageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePlantPriceChange} value={plantPriceChange} />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

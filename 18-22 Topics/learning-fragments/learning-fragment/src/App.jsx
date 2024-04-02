//import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Component/FoodItems";
import ErrorMessage from "./Component/ErrorMessage";
import Container from "./Component/Container";
import FoodInput from "./Component/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    // not write if/else
    //<React.Fragment>
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
        {/* //</React.Fragment> */}
      </Container>

    </>
  );
}

export default App;

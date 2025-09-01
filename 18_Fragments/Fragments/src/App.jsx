import React from "react";
import ErrorMessage from "./components/ErrorMessage";
import List from "./components/list";
import Container from "./components/container";
function App()
{
  let foodItem = ['Green vegitables','Fruits','Legumes','Berries','Oats']; 
  
  // we can use <> </> for fragments tag
  return <React.Fragment> 
    <center>
      <Container>
        <div><h1>Healthy Foods</h1></div>
        <ErrorMessage item={foodItem}></ErrorMessage>
        <List Items = {foodItem}></List>
      </Container>
      <Container><p>Please select the healthy food</p>
      </Container>
    </center>
  </React.Fragment>
};

export default App;
import Heading from "./compnents/heading";
import Item_container from "./compnents/item_container";
import ErrorMessage from "./compnents/error_message";
import Container from "./compnents/container";
import Search_bar from "./compnents/search_bar";
import { useState } from "react";

function App()
{
  let [fooditem,setFoodItem] = useState(['Salad','Milk']);

  const handleKeyDown = (e) =>
  {
    if(e.key === "Enter")
    {
      let newFoodItem = e.target.value;
      e.target.value = '';
      let newItemList = [...fooditem,newFoodItem];
      setFoodItem(newItemList);
    }
  };

  return(<>

    <Container>
      <Heading></Heading> 
      <Search_bar handleKeyDown= {handleKeyDown} />
      <ErrorMessage list = {fooditem}></ErrorMessage>
      <Item_container list = {fooditem}></Item_container>
    </Container>

  </>
  )
}

export default App;



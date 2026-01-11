import { useState } from "react";
import Items_data from "./items";
function Item_container({list})
{
    let [activeItems,setActiveItems] = useState([]);
     const[count,setCount] = useState(1);
    const handleBuy = (event,item)=>
    {
        setCount(count+1);
        let newItems = [...activeItems,item];
        
        if(count%2 === 0)
        {
            newItems = activeItems.filter(i => i !== item);
        }
        setActiveItems(newItems);
    };
    
    return <>
        <ul className="list-group">
            {list.map((items)=>
                (
                    <Items_data 
                    item ={items} 
                    handleBuy = {(event)=> handleBuy(event,items)} 
                    bought = {activeItems.includes(items)}
                    count={count}
                    key ={items}></Items_data>
                ))}
        </ul>
    </>
}

export default Item_container;
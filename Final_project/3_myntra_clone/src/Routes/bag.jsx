import { useSelector } from "react-redux";
import BagItems from "../components/bagItems";
import BagSummary from "../components/bagSummary";

const Bag = () => 
{
  const items = useSelector(store=> store.items);
  const bagItems = useSelector(store=> store.bag);
  const finalItems = items.filter(item=>
    {
      const itemIndex = bagItems.indexOf(item.id);
      return itemIndex >=0;
    }
    
  )

  return(
    <>
      <main>
        <div className="bag-page">
          
          <div className="bag-items-container">
            {
              finalItems.map(
                (item)=><BagItems key={item.id}  item={item}/>
              )
            }
          </div>
          <BagSummary finalItems = {finalItems}/>
        </div>
      </main>
    </>
  ) 
};
export default Bag;

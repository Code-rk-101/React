import { useDispatch, useSelector } from "react-redux";
import { bagSliceAction } from "../store/bag";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const HomeItem = ({item})=>
{
    const bagitems = useSelector((store)=>store.bag);
    const dispatch = useDispatch();
    const itemFound = bagitems.indexOf(item.id) >= 0;
    
    const handleAddToBag = (id)=>
    {
        dispatch(bagSliceAction.addToBag(id));
    };

    const handleRemove =()=>
    {
        dispatch(bagSliceAction.removeToBag(item.id))
    };
    
    return (
      <div className="item-container">
        <img
          className="item-image"
          src={item.image}
          alt="item image"
        />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {!itemFound ? (
          <button
            type="button"
            className="btn-add-bag btn btn-success"
            onClick={() => handleAddToBag(item.id)}
          >
            <IoMdAddCircleOutline />
            {" "}Add to Bag
          </button>
        ) : (
          <button
            type="button"
            className="btn-add-bag btn btn-danger"
            onClick={handleRemove}
          >
            <IoMdRemoveCircleOutline />
            {" "}Remove
          </button>
        )}
      </div>
    );
}
export default HomeItem;
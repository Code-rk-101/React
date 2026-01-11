const BagSummary = ({finalItems}) =>
{
    console.log(finalItems);
    const CONVENIENCE_FEES = 25;
    let totalItem = finalItems.length;
    let totalMRP = 0;
    let totalDiscount = 0;


    finalItems.forEach(finalItems => {
        totalMRP += finalItems.original_price;
        totalDiscount += finalItems.original_price - finalItems.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES*totalItem;

  return (
    <div className="bag-summary">
        <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
            <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
            </div>
            <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
                -₹{totalDiscount}
            </span>
            </div>
            <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">{CONVENIENCE_FEES*totalItem}</span>
            </div>
            <hr />
            <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
            </div>
        </div>
        <button className="btn-place-order">
            <div className="css-xjhrni">
                PLACE ORDER
            </div>
        </button>
    </div>
  );
};
export default BagSummary;

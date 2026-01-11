import styles from "./item.module.css";

function Items_data({item,handleBuy ,bought})
{
    return <>
        <li className={`list-group-item ${bought && "active"}`}>
            {item} 
            <button type="button" className={`${styles.btn} btn btn-success ${bought && "btn btn-danger"}`}
            onClick ={(event)=>{handleBuy(event,item)}}> {!bought? "Buy":"Remove"}
            </button>
        </li>
        
    </>
}

export default Items_data;
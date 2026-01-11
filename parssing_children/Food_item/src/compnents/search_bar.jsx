import styles from "./search_bar.module.css";

function Search_bar({handleKeyDown})
{
    return <>
        <input type="text" className={`${styles.bar}`} placeholder="search"
        onKeyDown={(event)=> handleKeyDown(event)} />

    </>
}

export default Search_bar; 
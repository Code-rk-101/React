import styles from "./container.module.css";

function Container({children})
{
    return <>
            <div className={styles.cont_style}>{children}</div>
    </>
}

export default Container;
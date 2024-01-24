import styles from "./Second.module.css"
const Second = ()=>{
    return (
        <div className={styles.secondContainer}>
                <div className={styles.row}>
                    <div className={styles.element1}></div>
                    <div className={styles.element2}></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.element3}></div>
                    <div className={styles.element4}></div>
                </div>

        </div>
    )
}
export default Second
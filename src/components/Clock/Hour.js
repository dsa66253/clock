import styles from "./Hour.module.css"
const Hour = ({ radius }) => {
    const width = radius * 2
    return (
        <div className={styles.hourContainer} style={{ width: width, height: width }}>
            <div className={styles.circle} style={{ width: width, height: width }}></div>
            <div className={styles.indicator} style={{ width: `${width}px`, height: `${width}px` }}>
                <div className={styles.row}>
                    <div className={styles.element1}></div>
                    <div className={styles.element2}></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.element3}></div>
                    <div className={styles.element4}></div>
                </div>
            </div>
        </div>
    )
}
export default Hour
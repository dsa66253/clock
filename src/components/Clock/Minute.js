import styles from "./Minute.module.css"
const Minute = ({ triangleLength }) => {
    return (
        <div style={{ width: `${triangleLength}px`, height: `${triangleLength}px` }}>
            <div className={styles.triangle} style={{ borderWidth: `0px ${triangleLength / 2}px ${triangleLength / 2 * Math.sqrt(3)}px ${triangleLength / 2}px` }} ></div>
            <div className={styles.indicator} style={{ width: `${triangleLength}px`, height: `${triangleLength}px` }}>
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
export default Minute
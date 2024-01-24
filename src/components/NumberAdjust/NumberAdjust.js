import {useState} from "react";
import styles from "./NumberAdjust.module.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const NumberAdjust =({defaultValue, handleAdjustNumber, type ,min, max})=>{
    const [value, setValue] = useState(defaultValue)
    const handleAdd = ()=>{
        const newValue = defaultValue + 1;
        if (newValue<=max){
            handleAdjustNumber(type, newValue)
        }
    }
    const handleMinus = ()=>{
        const newValue = defaultValue - 1;
        if (newValue>=min){
            handleAdjustNumber(type, newValue)
        }
    }
    return (
    <div className={styles.NumberAdjustContainer}>
        <div>{defaultValue}</div>
        <div className={styles.arrowWrapper}>
            <KeyboardArrowUpIcon onClick={handleAdd}/>
            <KeyboardArrowDownIcon onClick={handleMinus}/>
        </div>

    </div>
    )
}
export default NumberAdjust
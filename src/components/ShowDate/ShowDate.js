import React, { useState, useEffect } from 'react';
import styles from "./ShowDate.module.css"
const ShowDate = ({size}) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={styles.ShowDateWrapper} style={{width:size, height:size}}>
      <div>

        <span style={{fontSize:32}}>{time.getFullYear()}</span>
        <span></span>
      </div>
      <div>
        <span style={{fontSize:32}}>{time.getMonth()+1}</span>
        <span>月</span>
      </div>
      <div>
        <span style={{fontSize:84}} >{time.getDate()}</span>
      </div>

    </div>
  )

}
export default ShowDate
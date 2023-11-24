import React from 'react';
import styles from "../Body/Body.module.css";
import fetch from "../../Assets/fetch.png";
import record from "../../Assets/record.png";

const Body = () => {
  return (
    <div className={styles.bodymain}>
        <div className={styles.subbodymain}>
        <div className={styles.bodybutton}>
            <button className={styles.bodybutton1}><img src={record}/>View Recorded Video</button>
            <button className={styles.bodybutton1}><img src={fetch}/>Refetch Camera</button>
        </div>
        </div>
    </div>
  )
}

export default Body
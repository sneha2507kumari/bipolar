import React from 'react';
import styles from "../Body/Body.module.css";
import fetch from "../../Assets/fetch.png";
import record from "../../Assets/record.png";
import camera from "../../Assets/CameraDetails.png"

const Body = () => {
  return (
    <div className={styles.bodymain}>
        <div className={styles.subbodymain}>
        <div className={styles.bodybutton}>
            <button className={styles.bodybutton1}><img src={record} alt="record"/>View Recorded Video</button>
            <button className={styles.bodybutton1}><img src={fetch} alt="fetch"/>Refetch Camera</button>
          </div>
        <div className={styles.subbodymain2}>
          <div className={styles.camerapic}><img src={camera} alt="camera"/>
          <div className={styles.camerapicDetails}>
          <div className={styles.camerapicDetails2}>
            <div className={styles.camerapicDetails3}>
              <h1 className={styles.details}>Camera Details</h1>
              <button className={styles.camerabutton}>Active</button>
            </div>
            <div className={styles.camerapicDetails4}>
                <p className={styles.contentbody1}>Location:  <p className={styles.contentbody2}>Coimbatore</p></p>
                <p className={styles.contentbody1}>City:  <p className={styles.contentbody2}>Coimbatore</p></p>
                <p className={styles.contentbody1}>Timezone:  <p className={styles.contentbody2}>Delhi-India</p></p>
                <p className={styles.contentbody1}>Date added  <p className={styles.contentbody2}>Aug 03,2023 12:01:42 PM</p></p>
                <p className={styles.contentbody1}>Last update:  <p className={styles.contentbody2}>Aug 03,2023 12:01:42 PM</p></p>
            
            </div>
            <div className={styles.camerapicDetails5}>
                <p className={styles.contentbody1}>Manufacture details:  <p className={styles.contentbody2}>ADT</p></p>
                <p className={styles.contentbody1}>RTSP/HLS URL:  <p className={styles.contentbody3}>Copy URL</p></p>
            </div>
            
            
            
            </div>
            </div>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Body
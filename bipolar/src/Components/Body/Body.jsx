import React from 'react';
import styles from "../Body/Body.module.css";
import fetch from "../../Assets/fetch.png";
import record from "../../Assets/record.png";
import camera from "../../Assets/CameraDetails.png";
import camera1 from "../../Assets/camera1.png";
import camera2 from "../../Assets/camera2.png";
import camera3 from "../../Assets/camera3.png";
import camera4 from "../../Assets/camera4.png";


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
          <h3>Camera Health And Alert</h3>
          <div className={styles.cardbody}>
          <div className={styles.cardbody}>
            <div className={styles.card1body}>
            <div className={styles.card1subbody}>
            <p className={styles.cardbody1}>Offine Alert<p className={styles.cardbody2}>if camera is continuosly offline for</p></p>
            <h5 className={styles.cardbody3}>12 minutes</h5>
            <p className={styles.cardbody2}>Send an email<p className={styles.cardbody1}>email.com</p></p>
            </div>
            </div>
            <div className={styles.card2body}>
            <p className={styles.cardbody1}>Health Grade</p>
            <h5 className={styles.cardbody3}>96%</h5>
            <p className={styles.cardbody2}>Cheers, this camera had no offline time in the last 30 days</p>
            <p className={styles.cardbody4}>Grade A</p>
            </div>
            <div className={styles.card3body}>
            <p className={styles.cardbody1}>Health Logs</p>
            <p className={styles.cardbody2}>Today, 04:35pm:  Activated</p>
            <p className={styles.cardbody2}>23 Aug, 02:22pm:  Deactivated</p>
            <p className={styles.cardbody2}>21 Aug, 05:12am:  Activated</p>
            <p className={styles.cardbody2}>20 Aug, 02:12am:  Deactivated</p>
            <p className={styles.cardbody2}>19 Aug, 02:12am:  Deactivated</p>
            </div>
          </div>
          </div>
          <div className={styles.middle}>
          <div className={styles.middle1}>
          <h3>Recent Recordings</h3>
          <div className={styles.buttonmid}>View All</div>
          </div>
          <div className={styles.card3bodymain}>
          <div className={styles.card3bodysub}>
            <img src={camera1} alt="camera1"/>
            <p className={styles.cardbody1}>Recording_0121</p>
            <p className={styles.cardbody2}>Today, 04:42 pm </p>
            </div>
            <div className={styles.card3bodysub}>
            <img src={camera2} alt="camera2"/>
            <p className={styles.cardbody1}>Recording_0121</p>
            <p className={styles.cardbody2}>Today, 02:14 pm </p>
            </div>
            <div className={styles.card3bodysub}>
            <img src={camera3} alt="camera3"/>
            <p className={styles.cardbody1}>Recording_0121</p>
            <p className={styles.cardbody2}>Today, 02:09 pm </p>
            </div>
            <div className={styles.card3bodysub}>
            <img src={camera4} alt="camera4"/>
            <p className={styles.cardbody1}>Recording_0121</p>
            <p className={styles.cardbody2}>Today, 02:11 pm </p>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        
    
  )
}

export default Body
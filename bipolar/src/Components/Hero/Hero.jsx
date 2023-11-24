import React from 'react';
import styles from "../Hero/Hero.module.css";
import Vector from "../../Assets/Vector.png";

const Hero = () => {
  return (
    <>
    <div className={styles.heromain}>
      <div className={styles.heromain1}>
        <div className={styles.vectorpic}>
          <img src={Vector} className={styles.vectorpic1} alt="vector" />
        </div>
        <div className={styles.content}>
          <div className={styles.subcontent}>
            <h1 className={styles.subcontentV}>
              VMS<span className={styles.subcontentC}>/ Cameras / Camera Details</span>
            </h1>
            <p className={styles.lastc}> Bank Entrance-front-view Camera1</p>
          </div>
          <br/>
          <p className={styles.lastcc}>
          View and manage camera details, recordings, and connection details
          </p>
        </div>
      </div>
      <div className={styles.heromain2}>
        <button className={styles.button1} >Edit camera</button>
        <button className={styles.button2}>Deactivate</button>
        <button className={styles.button3}>Delete</button>
      </div>
    </div>
    </>
  );
}

export default Hero;

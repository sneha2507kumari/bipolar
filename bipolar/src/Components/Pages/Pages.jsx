// Pages.js
import React from 'react';
import Hero from "../Hero/Hero";
import styles from "../Pages/Pages.module.css";
import Body from "../Body/Body";

const Pages = () => {
  return (
    <>
     <div style={{ textAlign: 'center', backgroundColor: '#333', padding: '20px' }}>
      <h1 style={{ color: 'white' }}>BIPOLAR FACTORY</h1>
    </div>
    <nav>
        <ul><a href="#">Home</a></ul>
        <ul><a href="#">Charts</a></ul>
        <ul><a href="#">Cards</a></ul>
        <ul><a href="#">Forms</a></ul>
        <ul><a href="#">Tables</a></ul>
      </nav>
      <div className={styles.main}>
        <Hero />
        
      </div>
      <Body/>
    </>
  );
}

export default Pages;


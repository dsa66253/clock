import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ShowDate from './components/ShowDate/ShowDate';
import Clock from './components/Clock/Clock';

function App() {

  return (
    <div className={styles.App}>
      <ShowDate size={300}/>
      <Clock ClockSize={400}/>
    </div>
  );
}
export default App
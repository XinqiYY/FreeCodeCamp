import './styles.css';
import React, { useState } from 'react';

export default function App() {
  const [cel, setCel] = useState(0);
  const [fah, setFah] = useState(32);

  function handleClick() {
    let resFah = cel * 1.8 + 32;
    setFah(resFah);
  }

  return (
    <div className='container'>
      <h1>Temperature Converter</h1>
        <div className='wrapper'>
        <div className='cel'>
          <input type='number' value={cel} onChange={(e) => setCel(parseInt(e.target.value))}/>
          <p>Celsius</p>
        </div>
        <h3> = </h3>
        <div className='fah'>
          <input type='number' value={fah} onChange={(e) => setFah(parseInt(e.target.value))}/>
          <p>Fahrenheit</p>
        </div>
      </div>
      <button onClick={handleClick}>Calculate</button>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import "./InsertionSort.css";

const PRIMARY_COLOR = 'teal'

const InsertionSort = () => {
  const [array, setArray] = useState([])

  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1))
  }

  const resetArray = () => {
    let temp = []
    for(let i=0; i<300; i++) {
      temp.push(randomBetween(5, 550))
    }
    setArray(temp);
  }
  
  useEffect(() => {
    resetArray()
  }, []);

  const insertionSort = () => {
    
  }

  return (
    <div className="array-container">
      {array.map((value, idx) => {
        return (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        )
      })}
      
      <button onClick={resetArray}>Reset Array</button>
      <button onClick={insertionSort}>Insertion Sort</button>
    </div>
  );
}

export default InsertionSort;

import React, { useState, useEffect } from 'react';
import "./MergeSort.css";


const PRIMARY_COLOR = 'teal';


const MergeSort = ({ props }) => {
  const [array, setArray] = useState([]);

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
  }
  
  const resetArray = () => {
    let temp = []
    for(let i=0; i<300; i++) {
      temp.push(randomBetween(5, 550))
    }
    setArray(temp);
  }

  const mergeSort = () => {}

  const quickSort = () => {}

  const heapSort = () => {}

  const bubbleSort = () => {}

  useEffect(() => {
    resetArray()
  }, []);

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
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={quickSort}>Quick Sort</button>
      <button onClick={heapSort}>Heap Sort</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

export default MergeSort;

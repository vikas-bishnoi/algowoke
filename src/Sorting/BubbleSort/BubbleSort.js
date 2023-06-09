import React, { useState, useEffect } from 'react';
import { getBubbleSortAnimations } from '../Algorithms/bubbleSortAlgo';
import "./BubbleSort.css";


const PRIMARY_COLOR = 'teal';


const BubbleSort = ({ unsortedArray }) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(unsortedArray);
  }, [unsortedArray]);

  return (
    <div className="array-container">
      {array.length !== 0 && array.map((value, idx) => {
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
    </div>
  );
};

export default BubbleSort;

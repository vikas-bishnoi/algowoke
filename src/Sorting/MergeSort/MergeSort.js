import React, { useState, useEffect } from 'react';
import "./MergeSort.css";

const MergeSort = ({ props }) => {
  const [array, setArray] = useState([]);

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
  }
  
  useEffect(() => {
    for(let i=0; i<100; i++) {
      array.push(randomBetween(5, 1000))
    }
  }, []);

  return (
    <>
      {array.map((value, idx) => {
        <div className="array-bar" ket={idx}>
          {value}
        </div>;
      })}
    </>
  );
};

export default MergeSort;

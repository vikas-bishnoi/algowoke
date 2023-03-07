import React, { useState, useEffect } from 'react';
import { getInsertionSortAnimations } from '../Algorithms/insertionSortAlgo';
import "./InsertionSort.css";

const PRIMARY_COLOR = 'teal';
const SECONDARY_COLOR = 'red';

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
      const [animations,sortArray] = getInsertionSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
          const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
          const arrayBars = document.getElementsByClassName('array-bar');
          if(isColorChange === true) {
              const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
              const [temp, barOneIndex, barTwoIndex] = animations[i];
              const barOneStyle = arrayBars[barOneIndex].style;
              const barTwoStyle = arrayBars[barTwoIndex].style;
              setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
              },i * 1);
          }
          else {
              const [temp, barIndex, newHeight] = animations[i];
              const barStyle = arrayBars[barIndex].style;
              setTimeout(() => {
                  barStyle.height = `${newHeight}px`;
              },i * 1);  
          }
      }
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

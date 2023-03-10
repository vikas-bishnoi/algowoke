import React, { useState, useEffect } from 'react';
import { getBubbleSortAnimations } from '../Algorithms/bubbleSortAlgo';
import "./BubbleSort.css";


const PRIMARY_COLOR = 'teal';


const BubbleSort = ({ unsortedArray }) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    console.log("unsortedArray", unsortedArray)
    setArray(unsortedArray);
  }, []);

  const bubbleSort = () => {
    const [animations, sortArray] = getBubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {

      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";

      if (isColorChange) {
        const color = (animations[i][0] === "comparision1") ? 'red' : 'teal';
        const [comparision, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 3);

      } else {
        const [swap, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
            continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        },i * 1);  
      }
    }
  }

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

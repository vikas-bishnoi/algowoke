import React, { useState, useEffect } from 'react';
import { getQuickSortAnimations } from '../Algorithms/quickSortAlgo';
import "./QuickSort.css";


const PRIMARY_COLOR = 'teal';


const QuickSort = ({ props }) => {
  const [array, setArray] = useState([]);

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

  const quickSort = () => {
    const [animations,sortArray] = getQuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] == "comparision1") ? 'red' : 'teal';
            const [comparision, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * 1);
        }
        else {
            const [swap, barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * 1);  
        }        }
    // this.setState({array: sortArray})
    // const RESTORE_TIME = parseInt(1*animations.length/2 + 3000);
    // setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);  
}

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
      <button onClick={quickSort}>Sort</button>
    </div>
  );
};

export default QuickSort;

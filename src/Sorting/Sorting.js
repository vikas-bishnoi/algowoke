import React, { useEffect, useState } from "react";
import { getBubbleSortAnimations } from "./Algorithms/bubbleSortAlgo";
import SideBar from "../Components/Sidebar/Sidebar";
import BubbleSort from "./BubbleSort/BubbleSort";
import "./Sorting.css";

const MIN = 5;
const MAX = 30;

const optionData = [
  { value: "bubbleSort", label: "Bubble Sort" },
  { value: "insertionSort", label: "Insertion Sort" },
  { value: "mergeSort", label: "Merge Sort" },
  { value: "quickSort", label: "Quick Sort" },
  { value: "selectionSort", label: "Selection Sort" },
];

const Sorting = () => {
  const [size, setSize] = useState(Math.floor((MAX + MIN) / 2));
  const [speed, setSpeed] = useState(1);
  const [array, setArray] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    let temp = [];
    for (let i = 0; i < size; i++) {
      temp.push(Math.floor(Math.random() * (500 - 100 + 1)));
    }
    setArray(temp);
  };

  const bubbleSort = (array) => {
    return new Promise((resolve, reject) => {
      const [animations, sortArray] = getBubbleSortAnimations(array);
      for (let i = 0; i <= animations.length; i++) {
        if(i === animations.length) {
          setTimeout(() => {
            resolve(setArray(sortArray));
          }, i * speed * 30);
          break;
        }
        const arrayBars = document.getElementsByClassName("array-bar");
        const isColorChange =
          animations[i][0] === "comparision1" ||
          animations[i][0] === "comparision2";

        if (isColorChange) {
          const color = animations[i][0] === "comparision1" ? "red" : "teal";
          const [comparision, barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;

          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * speed * 30);
        } else {
          const [swap, barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
            continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
            barStyle.height = `${newHeight}px`;
          }, i * 1 * 30);
        }
      }
    });
  };

  const visualizeSort = (algorithem) => {
    if (algorithem === "bubbleSort") {
      bubbleSort(array).then(() => {
        setDisabled(false);
      });
    } else if (algorithem === "insertionSort") {
    } else if (algorithem === "mergeSort") {
    } else if (algorithem === "quickSort") {
    } else if (algorithem === "selectionSort") {
    } else {
      alert("Select a valid algorithem");
    }
  };

  return (
    <div className="sorting">
      <SideBar
        min={MIN}
        max={MAX}
        optionData={optionData}
        size={size}
        setSize={setSize}
        speed={speed}
        setSpeed={setSpeed}
        onGenerate={generateArray}
        onVisualize={visualizeSort}
        disabled={disabled}
        setDisabled={setDisabled}
      />
      <div className="algorithem">
        {array.length && <BubbleSort unsortedArray={array} />}
      </div>
    </div>
  );
};

export default Sorting;

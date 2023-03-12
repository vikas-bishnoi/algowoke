import React, { useEffect, useState } from "react";
import { getBubbleSortAnimations } from "./Algorithms/bubbleSortAlgo";
import { getInsertionSortAnimations } from "./Algorithms/insertionSortAlgo";
import { getSelectionSortAnimations } from "./Algorithms/selectionSortAlgo";
import { getMergeSortAnimations } from "./Algorithms/mergeSortAlgo";
import { getQuickSortAnimations } from "./Algorithms/quickSortAlgo";
import SideBar from "../Components/Sidebar/Sidebar";
import Array from "./Array/Array";
import "./Sorting.css";

const MIN = 5;
const MAX = 25;

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
      const [animations, sortedArray] = getBubbleSortAnimations(array);
      for (let i = 0; i <= animations.length; i++) {
        if (i === animations.length) {
          setTimeout(() => {
            resolve(setArray(sortedArray));
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
          }, (i * 30) / speed);
        } else {
          const [swap, barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
            continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
            barStyle.height = `${newHeight}px`;
          }, (i * 30) / speed);
        }
      }
    });
  };

  const insertionSort = (array) => {
    return new Promise((resolve, reject) => {
      const [animations, sortedArray] = getInsertionSortAnimations(array);
      for (let i = 0; i <= animations.length; i++) {
        if (i === animations.length) {
          setTimeout(() => {
            resolve(setArray(sortedArray));
          }, (i * 30) / speed);
          break;
        }
        const isColorChange =
          animations[i][0] === "comparision1" ||
          animations[i][0] === "comparision2";
        const arrayBars = document.getElementsByClassName("array-bar");
        if (isColorChange === true) {
          const color = animations[i][0] === "comparision1" ? "red" : "teal";
          const [temp, barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, (i * 30) / speed);
        } else {
          const [temp, barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
            barStyle.height = `${newHeight}px`;
          }, (i * 30) / speed);
        }
      }
      console.log(animations.length);
    });
  };

  const selectionSort = (array) => {
    return new Promise((resolve, reject) => {
      const [animations, sortedArray] = getSelectionSortAnimations(array);

      for (let i = 0; i <= animations.length; i++) {
        if (i === animations.length) {
          setTimeout(() => {
            resolve(setArray(sortedArray));
          }, (i * 30) / speed);
          break;
        }

        const isColorChange =
          animations[i][0] === "comparision1" ||
          animations[i][0] === "comparision2";
        const arrayBars = document.getElementsByClassName("array-bar");
        if (isColorChange === true) {
          const color = animations[i][0] === "comparision1" ? "red" : "teal";
          const [temp, barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, (i * 30) / speed);
        } else {
          const [temp, barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
            barStyle.height = `${newHeight}px`;
          }, (i * 30) / speed);
        }
      }
    });
  };

  const mergeSort = (array) => {
    return new Promise((resolve, reject) => {
      const [animations, sortedArray] = getMergeSortAnimations(array);
      console.log(sortedArray);
      for (let i = 0; i <= animations.length; i++) {
        if (i === animations.length) {
          setTimeout(() => {
            resolve(setArray(sortedArray));
          }, (i * 30) / speed);
          break;
        }

        const arrayBars = document.getElementsByClassName("array-bar");
        const isColorChange = i % 3 !== 2;

        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "red" : "teal";

          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, (i * 30) / speed);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, (i * 30) / speed);
        }
      }
    });
  };

  const quickSort = (array) => {
    return new Promise((resolve, reject) => {
      const [animations, sortedArray] = getQuickSortAnimations(array);
      for (let i = 0; i <= animations.length; i++) {
        if (i === animations.length) {
          setTimeout(() => {
            resolve(setArray(sortedArray));
          }, (i * 30) / speed);
          break;
        }
        const isColorChange =
          animations[i][0] === "comparision1" ||
          animations[i][0] === "comparision2";
        const arrayBars = document.getElementsByClassName("array-bar");
        if (isColorChange === true) {
          const color = animations[i][0] === "comparision1" ? "red" : "teal";
          const [comparision, barOneIndex, barTwoIndex] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, (i * 30) / speed);
        } else {
          const [swap, barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
            continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
            barStyle.height = `${newHeight}px`;
          }, (i * 30) / speed);
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
      insertionSort(array).then(() => {
        setDisabled(false);
      });
    } else if (algorithem === "mergeSort") {
      mergeSort(array).then(() => {
        setDisabled(false);
      });
    } else if (algorithem === "quickSort") {
      quickSort(array).then(() => {
        setDisabled(false);
      });
    } else if (algorithem === "selectionSort") {
      selectionSort(array).then(() => {
        setDisabled(false);
      });
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
        {array.length && <Array unsortedArray={array} />}
      </div>
    </div>
  );
};

export default Sorting;

import React from "react";
import SideBar from "../Components/Sidebar/Sidebar";
import BubbleSort from "./BubbleSort/BubbleSort";
import './Sorting.css'

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
  return (
    <div className="sorting">
      <SideBar min={MIN} max={MAX} optionData={optionData}/>
      <BubbleSort />
    </div>
  );
};

export default Sorting;

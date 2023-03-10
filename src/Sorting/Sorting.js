import React, {useEffect, useState} from "react";
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
  const [size, setSize] = useState(Math.floor((MAX + MIN) / 2));
  const [speed, setSpeed] = useState(1);
  const [array, setArray] = useState([]);
  
  useEffect(() => {
    generateArray()
  }, []);

  const generateArray = () => {
    let temp = []
    for(let i = 0; i < size; i++) {
      temp.push(Math.floor(Math.random() * (500 - 100 + 1)))
    }
    
    setArray(temp);
  }

  const visualizeSort= (algorithem) => {
    console.log(algorithem)
  }

  return (
    <div className="sorting">
      <SideBar min={MIN} max={MAX} optionData={optionData} size={size} setSize={setSize} speed={speed} setSpeed={setSpeed} onGenerate={generateArray} onVisualize={visualizeSort}/>
      <div className="algorithem">
        {array.length && <BubbleSort unsortedArray={array}/>}
      </div>
    </div>
  );
};

export default Sorting;

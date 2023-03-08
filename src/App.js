import "./App.css";
import MergeSort from "./Sorting/MergeSort/MergeSort";
import QuickSort from "./Sorting/QuickSort/QuickSort";
import BubbleSort from "./Sorting/BubbleSort/BubbleSort";
import InsertionSort from "./Sorting/InsertionSort/InsertionSort";
import SelectionSort from "./Sorting/SelectionSort/SelectionSort";
import Dijkstra from "./Graph/Dijkstra/Dijkstra";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

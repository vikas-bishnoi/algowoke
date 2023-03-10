import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home/Home";
import Navbar from './Components/Sidebar/Sidebar'
import Graph from './Graph/Graph';
import Sorting from './Sorting/Sorting';

import "./App.css";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graph-algo" element={<Graph />} />
        <Route path="/sort-algo" element={<Sorting />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

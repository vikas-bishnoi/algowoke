import React, {useState, useEffect} from "react";
import "./Home.css";
import GraphImg from '../assets/graph.gif'
import SortImg from '../assets/sort.gif'
import SearchImg from '../assets/search.gif'

const Home = () => {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 3) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const getBgUrl = () => {
      switch (photo) {
        case 1:
          return GraphImg;
        case 2:
          return SortImg;
        case 3:
          return SearchImg;
        default:
          return null;
      }
  }
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url(${getBgUrl()})`,
        }}
        className="bg-bottom bg-contain bg-no-repeat grid justify-items-center"
      >
        <div className="grid wrapper justify-between">
          <h1 className="home-title">AlgoWoke</h1>
          <hr />
          <h2 className="home-subtitle">Algorithms Visualizer</h2>
        </div>
      </div>
    </>
  );
};

export default Home;

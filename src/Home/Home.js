import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url('http://i.stack.imgur.com/kx8MT.gif')`,
        }}
        className="bg-center bg-cover bg-no-repeat grid justify-items-center"
      >
        <div className="grid wrapper justify-between">
          <h1 className="home-title">AlgoWoke</h1>
          <h2 className="home-subtitle">Algorithms Visualizer</h2>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import './Home.css'

const Home = () => {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url('http://i.stack.imgur.com/kx8MT.gif')`,
        }}
        className="bg-center bg-cover bg-no-repeat flex flex-col "
      >
        <div className="flex wrapper justify-between items-center">
          <div className="content lg:text-center">
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

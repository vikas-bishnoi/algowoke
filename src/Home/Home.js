import React from "react";

const Home = () => {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url(https://static.pexels.com/photos/232/apple-iphone-books-desk-large.jpg)`,
        }}
        className=" bg-center bg-cover bg-no-repeat h-90 flex flex-col "
      >
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

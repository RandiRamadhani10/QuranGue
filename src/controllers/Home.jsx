import React, { useState, useEffect } from "react";
import Chad from "../assets/chad.png";
import Carousel from "../views/home/Carousel";
const Home = () => {
  return (
    <>
      <div className="w-full flex md:rounded-none justify-around flex-row flex-wrap items-center bg-colorCustom-darkest pt-16 md:pt-2">
        <h1 className="md:w-96 flex w-10  items-center text-2xl md:text-9xl font-bold text-white">Stay Halal Brother</h1>
        <img className="w-xs md:w-xl" src={Chad} alt="" />
      </div>
      <Carousel />
      <div className="flex justify-center  flex-col bg-colorCustom-darkest items-center w-full bg-colorCustom">
        <p className="flex items-center justify-center text-center w-full h-l text-2xl text-white p-6">
          “If you can't stand the fatigue of studying, then you will bear the pain of stupidity”
          <br />
          ~Imam Syafi’i~
        </p>
        <div className="w-full bg-colorCustom-darkest p-2 md:mb-0 mb-20">
          <p className="text-center md:text-5xl text-2xl text-white my-2">Benefits Reading Quran</p>
          <div className=" flex flex-wrap justify-around my-7">
            <div className="m-2 w-m h-m flex justify-center  items-center border-4 rounded-lg border-colorCustom-light">
              <p className="m-2 text-white text-center text-2xl p-2">You will get rewarded for every letter that you read from the Quran.</p>
            </div>
            <div className="m-2 w-m h-m flex justify-center  items-center border-4 rounded-lg border-colorCustom-light">
              <p className="text-white text-center text-2xl p-2">Quran Calms the Soul.</p>
            </div>
            <div className="m-2 w-m h-m flex justify-center  items-center border-4 rounded-lg border-colorCustom-light">
              <p className="text-white text-center text-2xl p-2">You stutter and can't get it right? No problem. You will be rewarded for that too!.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dataSurat from "../models/data/dataSurat";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import dataLocal from "../models/data-lokal/dataLokal";
import "swiper/swiper.min.css";

const Surah = () => {
  SwiperCore.use([Autoplay]);
  const [items, setItem] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const fetchItem = await fetch(`https://api.quran.sutanlab.id/surah/`);
      const data = await fetchItem.json();
      const surah = data.data;
      setItem(surah);
      surah.forEach((data) => {
        dataSurat.push(data);
      });
      console.log();
      dataLocal.SetData(surah, "dataLocalSurat");
    };
    fetchItems();
  }, [setItem]);
  return (
    <>
      <div className="flex w-full h-l justify-center pt-20 bg-colorCustom-darkest">
        <Swiper className="mySwiper w-full" loop={true} autoplay={{ delay: 7000, disableOnInteraction: false }}>
          <SwiperSlide className="w-full flex justify-center  p-5">
            <p className="cursor-default text-white p-2 w-full md:text-6xl text-2xl cursor- font-bold text-center">You will get rewarded for every letter that you read from the Quran</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center  p-5">
            <p className="cursor-default text-white w-3/5 md:text-6xl text-2xl font-bold text-center">Quran Calms the Soul</p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center  p-5">
            <p className="cursor-default text-white w-3/5 md:text-6xl text-2xl font-bold text-center">You stutter and can't get it right? No problem. You will be rewarded for that too!</p>
          </SwiperSlide>
        </Swiper>
      </div>
      <Link to="/search" className=" w-32 justify-evenly items-center p-2 md:bottom-10 bottom-24 rounded-full hover:bg-colorCustom-light cursor-pointer bg-delay border-white border-2 fixed right-5 bg-colorCustom flex ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p className="font-bold text-white ">Search</p>
      </Link>
      <div className="w-full flex p-4 justify-center bg-colorCustom-dark shadow-2xl flex-wrap pb-32">
        {items.map((data, index) => {
          return (
            <Link to={`/surah/${data.number}`} className=" bg-colorCustom m-3 md:w-auto w-full bg-delay">
              <div className="md:w-m w-s p-2">
                <div className="cursor-pointer flex justify-between">
                  <p className="cursor-pointer text-2xl text-gray-200">{data.name.transliteration.id}</p>
                </div>
                <p className="cursor-pointer text-lg text-gray-300">{data.name.translation.id}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Surah;

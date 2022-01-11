import React from "react";
import logo from "../assets/Quran.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="w-full h-screen bg-colorCustom-darkest bg-gradient-to-r from-colorCustom-dark">
        <div className="flex w-full h-full justify-center flex-col items-center">
          <img src={logo} className="md:w-40 w-20  " alt="" />
          <p className="text-white md:text-4xl text-3xl my-5">QuranGue</p>
          <p className="text-white text-1xl my-1">Created by : Dwi Randi Ramadhani</p>
          <p className="text-blue-300 text-sm my-1">
            <a href="https://github.com/sutanlab/quran-api">API from : sutanlab-Quran - API</a>
          </p>
          <div className="flex w-m cursor justify-evenly items-center pt-5">
            <a href="https://github.com/RandiRamadhani10" className="w-14 h-5 flex justify-center  text-center rounded-full bg-gray-300 ">
              <p className="cursor-pointer text-gray-8 text-xs">GitHub</p>
            </a>
            <a href="https://www.instagram.com/randi.r35/" className="w-16 h-5 flex justify-center  text-center rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
              <p className="cursor-pointer text-white text-xs">Instagram</p>
            </a>
            <a href="https://web.facebook.com/rendy.itoedandy/" className="w-16 h-5  flex justify-center  text-center rounded-full bg-blue-600">
              <p className="cursor-pointer text-white text-xs">Facebook</p>
            </a>
          </div>
          <a href="https://trakteer.id/randi-ramadhani-l7d9z/tip" className="w-s flex justify-center items-center rounded-full mt-5 h-10 bg-red-700 border-2 hover:bg-red-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 text-white h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
            <p className="text-white text-1xl">{"Donate me :)"}</p>
          </a>
          <p className="text-amiri text-gray-300 mt-3">“والصدقة تطفىء الخطيئة كما تطفىء الماء النار”</p>
          <p className="text-gray-300 text-center">“Sedekah dapat menghapus dosa sebagaimana air memadamkan api.”</p>
          <p className="text-gray-300">HR. At-Tirmidzi</p>
        </div>
      </div>
    </>
  );
};

export default About;

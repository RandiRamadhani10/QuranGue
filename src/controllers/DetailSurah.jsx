import React, { useState, useEffect } from "react";
import dataLocal from "../models/data-lokal/dataLokal";
import Surah from "./Surah";
import AlertJS from "../utils/alert";
const DetailSurah = ({ match }) => {
  const id = parseInt(match.params.id);
  const [items, setItem] = useState([]);
  const index = dataLocal.LoadData("dataLocalSurat");

  const surat = index[id - 1];

  useEffect(() => {
    const fetchItems = async () => {
      const fetchItem = await fetch(`https://api.quran.sutanlab.id/surah/${id}`);
      const data = await fetchItem.json();
      setItem(data.data.verses);
    };
    fetchItems();
  }, [setItem]);
  const fung = (event) => {
    const dataBtn = event.target.value;
    const btn = document.querySelector(".btn").value;
    const elmt = document.querySelectorAll(".view");
    const pop = document.querySelector(".popup");
    elmt.forEach((data) => {
      if (data.dataset.id === dataBtn) {
        data.scrollIntoView({ behavior: "smooth" });
        pop.classList.add("hidden");
      }
    });
  };

  const addSurah = (event) => {
    event.preventDefault();
    let dataQ = [];
    dataQ.push(surat);
    let id = dataLocal.LoadData("dataBookmark");
    console.log(id);
    if (id !== null) {
      const sel = id.filter((data) => {
        const dat = data.number === surat.number;
        return dat;
      });
      console.log(sel.length);
      if (sel.length < 1) {
        console.log("berhasil masuk");
        id.push(surat);
        dataLocal.SetData(id, "dataBookmark");
        AlertJS.msg("Surah berhasil ditambah", "success");
      } else {
        AlertJS.msg("Surah sudah di Bookmark", "info");
      }
    } else {
      dataLocal.SetData(dataQ, "dataBookmark");
      id = dataLocal.LoadData("dataBookmark");
      AlertJS.msg("Surah berhasil ditambah", "success");
    }
  };
  const searchAyat = () => {
    const pop = document.querySelector(".popup");
    pop.classList.toggle("hidden");
  };
  return (
    <>
      <div className="flex w-full h-full justify-center pt-20 bg-colorCustom-darkest p-3 pb-10">
        <div className="flex md:w-1/2 w-full">
          <div className="text-white flex flex-col h-full">
            <p className="text-3xl my-2">{surat.name.transliteration.id}</p>
            <p className="text-1xl text-gray-300 mb-3">
              {surat.name.translation.id} | {surat.numberOfVerses} ayat
            </p>
            <p className="text-justify">{surat.tafsir.id}</p>
            <div className="flex justify-center mt-4">
              <button onClick={addSurah} className=" w-32 justify-evenly items-center p-2 rounded-full hover:bg-colorCustom-light cursor-pointer bg-delay border-white border-2 right-5 bg-colorCustom flex ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <p className="font-bold text-white ">Add</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* pop up */}
      <div className="fixed flex justify-center md:bottom-20 bottom-32 md:right-10 right-2 hidden popup ">
        <div className="md:w-xxl w-full p-4 bg-colorCustom-darkest h-l overflow-auto border border-gray-200 sdw">
          <div className="w-full h-full">
            {items.map((data) => {
              return (
                <button className="h-20 w-full bg-colorCustom text-white btn my-1" onClick={fung} value={data.number.inSurah}>
                  ayat {data.number.inSurah}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="md:w-full ">
        <div className="flex justify-center mt-10 ">
          <p className="text-4xl font-amiri">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        </div>
        <div className="flex w-full flex-col justify-end items-end md:px-20 px-5 pb-32">
          {items.map((data) => {
            return (
              <>
                <div className="my-16 view" data-id={data.number.inSurah}></div>
                <div className="w-full ">
                  <div className="flex w-full justify-between">
                    <p className="text-2xl">{data.number.inSurah}</p>
                    <p className="leading-loose text-right font-amiri text-4xl">{data.text.arab}</p>
                  </div>
                  <p className="mt-3 text-2xl text-right">{data.text.transliteration.en}</p>
                  <p className="mt-3 text-1xl text-justify">{data.tafsir.id.short}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* seacrh */}
      <div onClick={searchAyat} className=" w-32 justify-evenly items-center p-2 md:bottom-10 bottom-24 rounded-full hover:bg-colorCustom-light cursor-pointer bg-delay border-white border-2 fixed right-5 bg-colorCustom flex ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p className="font-bold text-white ">Ayat</p>
      </div>
    </>
  );
};

export default DetailSurah;

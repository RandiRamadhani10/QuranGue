import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dataLocal from "../models/data-lokal/dataLokal";
import dataSurat from "../models/data/dataSurat";
const SearchSurah = () => {
  const [items, setItem] = useState([]);
  const dataa = dataLocal.LoadData("dataLocalSurat");
  const seacrhByName = (event) => {
    let keyword = event.target.value;

    const surah = dataa.filter((data) => {
      return data.name.transliteration.id.toUpperCase().includes(keyword.toUpperCase());
    });
    setItem(surah);
  };

  return (
    <>
      <form action="" className="flex justify-center w-full pt-20 bg-colorCustom-darkest">
        <div className="p-8 w-xl">
          <div className="bg-colorCustom-dark flex items-center rounded-full shadow-xl">
            <input class="rounded-l-full w-full py-4 px-6 text-white leading-tight bg-colorCustom-dark focus:outline-none" onChange={seacrhByName} />

            <div className="p-2">
              <button className="bg-colorCustom-light text-white rounded-full p-2 hover:bg-colorCustom focus:outline-none w-8 h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="w-full flex p-4 justify-center shadow-2xl flex-wrap pb-32">
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

export default SearchSurah;

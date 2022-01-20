import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import dataLocal from "../models/data-lokal/dataLokal";
import Swal from "sweetalert2";

const Bookmark = () => {
  const [items, setItems] = useState(null);
  const data = dataLocal.LoadData("dataBookmark");

  const remove = (id) => {
    const index = data.findIndex((item) => item.number === id);
    data.splice(index, 1);
    dataLocal.SetData(data, "dataBookmark");
    setItems(data);
  };
  useEffect(() => {
    setItems(data);
  }, [setItems]);
  return (
    <>
      <div className="flex w-full md:h-l h-m justify-center pt-20 bg-colorCustom-darkest">
        <Swiper className="mySwiper w-full" loop={true} autoplay={{ delay: 7000, disableOnInteraction: false }}>
          <SwiperSlide className="w-full flex justify-center  p-5">
            <p className="cursor-default text-white p-2 w-full md:text-6xl text-1xl  font-bold text-center">
              "Show forgiveness, speak for justice and avoid the ignorant."<p className="text-2xl mt-2">Quran 7:199</p>
            </p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center  p-5">
            <p className="cursor-default text-white w-3/5 md:text-6xl text-1xl font-bold text-center">
              Quran "If they seek peace, then seek you peace. And trust in God for He is the One that heareth and knoweth all things." <p className="text-2xl mt-2">Quran 8:61</p>{" "}
            </p>
          </SwiperSlide>
          <SwiperSlide className="w-full flex justify-center  p-5">
            <p className="cursor-default text-white w-3/5 md:text-6xl text-1xl font-bold text-center">
              "Those who believed and led a righteous life are the best creatures." <p className="text-2xl mt-2">Quran 98:7</p>
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex  justify-center items-center shadow-2xl flex-wrap p-10">
        {data.length < 1 ? (
          <div className="flex h-full w-full justify-center items-center">
            <p className="text-xl font-bold">Belum ada Bookmark !</p>
          </div>
        ) : (
          data.map((data, index) => {
            return (
              <div className=" bg-colorCustom m-3 md:w-auto w-full bg-delay">
                <div className="md:w-m w-s p-2 flex flex-row w-full">
                  <Link to={`/surah/${data.number}`} className="cursor-pointer flex flex-col justify-between w-5/6">
                    <p className="cursor-pointer text-2xl text-gray-200">{data.name.transliteration.id}</p>
                    <p className="cursor-pointer text-lg text-gray-300">{data.name.translation.id}</p>
                  </Link>
                  <div className="w-1/6 flex justify-center items-center ">
                    <button
                      data-id={data.number}
                      className="btnRemove"
                      onClick={() => {
                        Swal.fire({
                          title: "Apakah anda yakin?",
                          text: `ingin Menghapus surah ${data.name.transliteration.id} dari bookmark!`,
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            remove(data.id);
                          }
                        });
                      }}
                    >
                      <svg data-id={data.number} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 bg-colorCustom hover:bg-colorCustom-dark rounded-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path data-id={data.number} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Bookmark;

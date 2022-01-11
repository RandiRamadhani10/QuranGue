import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";

const Carousel = (props) => {
  SwiperCore.use([Pagination]);

  const [items, setItem] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const fetchItem = await fetch(`https://api.quran.sutanlab.id/surah`);
      const data = await fetchItem.json();
      setItem(data.data);
    };
    fetchItems();
  }, [setItem]);
  return (
    <>
      <div className="bg-colorCustom">
        <div className="w-full bg-colorCustom-dark rounded-b-lg  md:flex hidden justify-center p-4">
          <div className="md:w-xl2 sm:w-l w-full">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              freeMode={false}
              pagination={{
                clickable: false,
              }}
              autoplay={{
                delay: 2000,
              }}
              className=" mySwiper z-0"
            >
              {items.map((data, index) => {
                if (index >= 100) {
                  return (
                    <SwiperSlide>
                      <Link to={`/surah/${index + 1}`}>
                        <div className="md:w-xs cursor-pointer hover:bg-colorCustom sm:w-16 sm:h-xs w-20 h-20  md:h-xs mx-2 bg-colorCustom-light">
                          <p className="cursor-pointer flex justify-center items-center h-full text-white text-xs md:text-lg">{data.name.transliteration.id}</p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

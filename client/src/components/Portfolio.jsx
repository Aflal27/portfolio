import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

export default function Portfolio() {
  const { dark } = useSelector((state) => state.darkState);
  const [projectData, setProjectData] = useState();

  SwiperCore.use([Navigation]);
  useEffect(() => {
    const fatch = async () => {
      try {
        const { data } = await axios.get("/api/project/get");
        setProjectData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fatch();
  }, []);

  return (
    <>
      <div
        id="Portfolio"
        className=" mt-[30rem] sm:mt-0 flex flex-col items-center justify-center h-[70hv]">
        {/* heading */}
        {dark && dark ? (
          <span className=" text-white text-4xl font-bold">
            Recent Projects
          </span>
        ) : (
          <span className=" text-slate-600 text-4xl font-bold">
            Recent Projects
          </span>
        )}

        <span className=" text-orange-300 font-bold text-3xl">Portfolio</span>

        {/* slider */}
      </div>
      <Swiper navigation className=" mt-6">
        {projectData &&
          projectData.map((list) => (
            <SwiperSlide key={list.name}>
              <div className=" object-cover flex flex-col items-center justify-center gap-3">
                {dark && dark ? (
                  <span className=" text-white text-xl font-semibold">
                    {list.name}
                  </span>
                ) : (
                  <span className=" text-xl font-semibold">{list.name}</span>
                )}
                <img src={list.image} alt="image" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>

    // </div>
  );
}

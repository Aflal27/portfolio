import React from "react";
import wave from "../img/wave.png";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="  relative flex items-center justify-center">
      <img className=" scale-125" src={wave} alt="" />
      <div className=" absolute ">
        <span className=" text-sm  sm:text-xl text-white font-semibold">
          mohamedafla6719@gmail.com
        </span>
      </div>
      <div className=" absolute mt-12">
        <div className=" scale-50 sm:scale-100 flex gap-7 items-center justify-center mt-10">
          <FaFacebook size={60} color="white" />
          <FaGithub size={60} color="white" />
          <FaInstagram size={60} color="white" />
        </div>
      </div>
    </div>
  );
}

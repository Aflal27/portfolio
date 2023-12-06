import React from "react";
import { useSelector } from "react-redux";

export default function Card({ emoji, heading, details }) {
  const { dark } = useSelector((state) => state.darkState);

  return (
    <div className=" absolute card w-[14rem] h-[16rem] flex flex-col items-center text-center">
      <img className=" scale-75" src={emoji} alt="emoji" />
      {dark && dark ? (
        <span className=" text-lg font-semibold text-white mb-3">
          {heading}
        </span>
      ) : (
        <span className=" text-lg font-semibold text-slate-700 mb-3">
          {heading}
        </span>
      )}

      {dark && dark ? (
        <span className=" text-sm text-black mb-2">{details}</span>
      ) : (
        <span className=" text-sm text-gray-500 mb-2">{details}</span>
      )}

      <button className=" text-sky-500 hover:underline uppercase">
        learn more
      </button>
    </div>
  );
}

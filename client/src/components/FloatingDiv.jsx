import React from "react";
import { useSelector } from "react-redux";

export default function FloatingDiv({ image, txt1, txt2 }) {
  const { dark } = useSelector((state) => state.darkState);

  return (
    <div className=" absolute z-50 flex items-center gap-4 bg-white scale-50  w-50  rounded-lg p">
      <img src={image} alt="crown img" />
      {dark && dark ? (
        <span className=" bg-white p-8 text-3xl font-serif text-black">
          {txt1}
          <br />
          {txt2}
        </span>
      ) : (
        <span className=" bg-white p-8 text-3xl font-serif">
          {txt1}
          <br />
          {txt2}
        </span>
      )}
    </div>
  );
}

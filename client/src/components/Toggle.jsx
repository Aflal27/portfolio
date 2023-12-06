import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { darkmoodSuccess } from "../slices/darkmoodSlice";

export default function Toggle() {
  const { dark } = useSelector((state) => state.darkState);
  const dispatch = useDispatch();

  const handleDark = () => {
    try {
      if (dark === false) {
        dispatch(darkmoodSuccess(true));
      } else {
        dispatch(darkmoodSuccess(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleDark}
      className=" relative flex items-center justify-between border-2 border-orange-400 rounded-2xl p-1">
      <BiSun className=" w-[1rem] h-[1rem] text-orange-300" />
      <BiMoon className=" w-[1rem] h-[1rem] text-orange-300" />

      {dark && dark ? (
        <div className=" p-2 absolute left-5 bg-orange-300 rounded-full "></div>
      ) : (
        <div className=" p-2 absolute bg-orange-300 rounded-full "></div>
      )}
    </button>
  );
}

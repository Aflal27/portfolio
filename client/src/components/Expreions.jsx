import React from "react";
import { useSelector } from "react-redux";

export default function Expreions() {
  const { dark } = useSelector((state) => state.darkState);

  return (
    <div
      id="Expreions"
      className=" scale-50 mt-[55rem] flex items-center justify-center gap-20 sm:mt-11 sm:h-[400px] sm:scale-110">
      <div className=" flex flex-col items-center">
        <span className=" border-x-cyan-600 border-y-orange-400  w-16 h-16 flex justify-center items-center border-8  rounded-full">
          1+
        </span>
        {dark && dark ? (
          <span className="mt-4 text-xl font-semibold text-white">Yers</span>
        ) : (
          <span className="mt-4 text-xl font-semibold text-slate-600">
            Yers
          </span>
        )}
        <span className=" text-orange-300 text-lg">Expreience</span>
      </div>
      <div className=" flex flex-col items-center">
        <span className=" border-x-cyan-600 border-y-orange-400  w-16 h-16 flex justify-center items-center border-8  rounded-full">
          10+
        </span>
        {dark && dark ? (
          <span className="mt-4 text-xl font-semibold text-white">
            Completed
          </span>
        ) : (
          <span className="mt-4 text-xl font-semibold text-slate-600">
            Completed
          </span>
        )}

        <span className=" text-orange-300 text-lg">Projects</span>
      </div>
      <div className=" flex flex-col items-center">
        <span className=" border-x-cyan-600 border-y-orange-400  w-16 h-16 flex justify-center items-center border-8  rounded-full">
          0+
        </span>
        {dark && dark ? (
          <span className="mt-4 text-xl font-semibold text-white">
            Companies
          </span>
        ) : (
          <span className="mt-4 text-xl font-semibold text-slate-600">
            Companies
          </span>
        )}

        <span className=" text-orange-300 text-lg">Work</span>
      </div>
    </div>
  );
}

import React from "react";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import thumbup from "../img/thumbup.png";
import crown from "../img/crown.png";
import glassesimoji from "../img/glassesimoji.png";
import FloatingDiv from "./FloatingDiv";
import { motion, spring } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

export default function Intro() {
  const { dark } = useSelector((state) => state.darkState);

  return (
    <div className=" sm:flex h-[77vh] mt-20">
      {/* left */}
      <div className="flex flex-col flex-1 relative gap-3">
        <div className=" flex flex-col">
          {dark && dark ? (
            <span className=" text-white  text-8xl font-bold">Hi! I Am</span>
          ) : (
            <span className="  text-8xl font-bold text-slate-700">
              Hi! I Am
            </span>
          )}
          <span className=" text-orange-300 text-5xl font-bold">
            Mohamed Aflal
          </span>
          <span className=" text-sm font-normal mt-6">
            FullStack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>

        <Link spy={true} to="Form" smooth={true} activeClass="activeClass">
          <button className="button w-20 h-9 mt-5">Hire Me</button>
        </Link>

        <div className="img flex gap-8 cursor-pointer mt-8 items-center ">
          <img src={github} alt="icon" />
          <img src={linkedin} alt="icon" />
          <img src={instagram} alt="icon" />
        </div>
      </div>

      {/* right */}
      <div className=" scale-75 mt-20  sm:scale-100 sm:mt-0  sm:flex-1  relative">
        <div className="">
          <img
            className=" top-[120px] scale-125 sm:top-0  absolute z-10 sm:scale-95 -left-8"
            src={Vector1}
            alt="img"
          />
          <img
            className=" top-[120px] scale-125 sm:top-0 absolute z-10 sm:scale-90"
            src={Vector2}
            alt="img"
          />
          <img
            className=" w-[600px] h-[550px] -ml-[20px]  sm:-ml-[70px]  top-[50px] sm:top-0 absolute z-10 sm:scale-125  object-contain"
            src={"../../public/images/aflal.png"}
            alt="img"
          />
          <motion.img
            inherit={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={{ duration: 2, type: spring }}
            className=" absolute z-10 scale-50 -top-20 -left-16 "
            src={glassesimoji}
            alt="img"
          />
        </div>
        <motion.div
          inherit={{ top: "-10%" }}
          whileInView={{ left: "-3%" }}
          transition={{ duration: 2, type: spring }}
          className=" absolute ml-[68%] ">
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          whileInView={{ left: "10%" }}
          transition={{ duration: 2, type: spring }}
          className=" absolute mt-72 -ml-24">
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>

        <div className=" absolute bg-rose-300 p-3 w-56 h-80 top-2 left-80 outline-none opacity-30 blur"></div>
        <div className="  absolute bg-sky-200 p-3 w-[800px] h-28 top-80 left- outline-none opacity-60 blur"></div>
      </div>
    </div>
  );
}

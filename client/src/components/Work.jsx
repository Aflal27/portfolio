import React from "react";
import Upwork from "../img/Upwork.png";
import fiverr from "../img/fiverr.png";
import amazon from "../img/amazon.png";
import Shopify from "../img/Shopify.png";
import Facebook from "../img/Facebook.png";
import { motion, spring } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

export default function Work() {
  const { dark } = useSelector((state) => state.darkState);

  return (
    <div id="work" className=" sm:flex h-[90vh] mt-24">
      {/* left */}
      <div className=" flex flex-col flex-1 gap-3 relative">
        <div className=" absolute bg-rose-300 w-[700px] h-[400px] -left-12   outline-none opacity-10 blur"></div>
        {dark && dark ? (
          <span className=" text-5xl font-bold text-white">
            Works for All these
          </span>
        ) : (
          <span className=" text-5xl font-bold text-slate-600">
            Works for All these
          </span>
        )}

        <span className=" text-orange-300 text-4xl font-semibold">
          Brands & Clients
        </span>
        <span className=" text-sm text-gray-500 mt-3">
          As a versatile freelance full stack developer, I offer a wide range of
          services, from creating stunning user interfaces to building robust
          server-side solutions
        </span>
        <span className=" text-sm text-gray-500">
          I provide end-to-end web development services as a freelance full
          stack developer, delivering custom solutions tailored to meet the
          unique needs of each client
        </span>
        <Link
          spy={true}
          to="Form"
          smooth={true}
          activeClass="activeClass"
          className=" z-10">
          <button className="button w-28 h-9 mt-5 ">Hire me</button>
        </Link>
      </div>

      {/* right */}
      <div className=" -left-[150px] scale-75 sm:scale-100 sm:left-0 flex-1 ml-28 relative ">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: spring }}
          className=" relative w-[18rem] h-[18rem] rounded-full shadow-2xl bg-white ">
          <div className=" absolute -top-10 left-24 w-[6rem] h-[6rem] shadow-2xl bg-white rounded-full flex items-center justify-center">
            <img className=" scale-50" src={Upwork} alt="icons" />
          </div>
          <div className=" absolute top-24 -left-10 w-[6rem] h-[6rem] shadow-2xl bg-white rounded-full flex items-center justify-center">
            <img className=" scale-50" src={Facebook} alt="icons" />
          </div>
          <div className=" absolute top-24 left-24 w-[6rem] h-[6rem] shadow-2xl bg-white rounded-full flex items-center justify-center">
            <img className=" scale-50" src={amazon} alt="icons" />
          </div>
          <div className=" absolute top-60 left-24 w-[6rem] h-[6rem] shadow-2xl bg-white rounded-full flex items-center justify-center">
            <img className=" scale-50" src={fiverr} alt="icons" />
          </div>
          <div className=" absolute top-24 left-60 w-[6rem] h-[6rem] shadow-2xl bg-white rounded-full flex items-center justify-center">
            <img className=" scale-50" src={Shopify} alt="icons" />
          </div>
          <div className=" absolute w-[15rem] h-[15rem] bg-blue-600 rounded-full -z-10 left-28 -top-5"></div>
          <div className=" absolute w-[15rem] h-[15rem]  bg-yellow-400 rounded-full -z-10 left-28 top-28"></div>
        </motion.div>
      </div>
    </div>
  );
}

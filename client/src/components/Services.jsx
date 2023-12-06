import React from "react";
import heartemoji from "../img/heartemoji.png";
import glasses from "../img/glasses.png";
import humble from "../img/humble.png";
import Card from "./Card";
import { motion, spring } from "framer-motion";
import { useSelector } from "react-redux";

export default function Services() {
  const { dark } = useSelector((state) => state.darkState);

  return (
    <div className=" mt-[700px] sm:flex h-[110vh] sm:mt-24" id="Services">
      {/* left */}
      <div className=" flex flex-col flex-1 gap-3 relative">
        <div className=" absolute bg-rose-300 w-[700px] h-[700px] -left-12   outline-none opacity-10 blur"></div>
        {dark && dark ? (
          <span className=" text-5xl font-bold text-white ">My Awesome</span>
        ) : (
          <span className=" text-5xl font-bold text-slate-600">My Awesome</span>
        )}
        <span className=" text-orange-300 text-4xl font-semibold">
          services
        </span>
        <span className=" text-sm text-gray-500 mt-3">
          provide end-to-end web development solutions as a full stack
          developer, handling both front-end and back-end development to create
          seamless and user-friendly websites.
        </span>
        <span className=" text-sm text-gray-500">
          My services as a full stack developer encompass everything from
          building responsive user interfaces to designing robust server-side
          architecture, ensuring a cohesive and high-performing web application.
        </span>

        <button className="button  w-28 h-9 mt-5 z-10">Download CV</button>
      </div>

      {/* right */}
      <div className="flex-1 relative">
        <div className="   absolute bg-sky-200  w-[800px] h-[700px]   outline-none opacity-20 blur"></div>
        {/* first card */}
        <motion.div
          initial={{ marginRight: "-60px" }}
          whileInView={{ marginLeft: "-40px" }}
          transition={{ duration: 1, type: spring }}
          className=" top-[50px]  absolute sm:left-48">
          <Card
            emoji={heartemoji}
            heading={"Design"}
            details={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        {/* secound card */}
        <motion.div
          initial={{ marginRight: "-60px" }}
          whileInView={{ marginLeft: "-40px" }}
          transition={{ duration: 1, type: spring }}
          className=" top-[400px] absolute sm:top-60 sm:-left-16">
          <Card
            emoji={glasses}
            heading={"Developer"}
            details={"Html, Css, JavaScript, React, NodeJs, ExpressJs,MongoDB"}
          />
        </motion.div>
        {/* third card */}
        <motion.div
          initial={{ marginRight: "-60px" }}
          whileInView={{ marginLeft: "-20px" }}
          transition={{ duration: 1, type: spring }}
          className=" top-[750px] absolute sm:left-48 sm:top-80 ">
          <Card
            emoji={humble}
            heading={"MERN Stack "}
            details={"React, NodeJs, ExpressJs,MongoDB"}
          />
        </motion.div>
      </div>
    </div>
  );
}

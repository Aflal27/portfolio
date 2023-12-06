import React from "react";
import Toggle from "./Toggle";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between relative">
      {/* left */}
      <div className=" flex  ">
        <div className=" flex flex-1 items-center gap-8">
          <p className=" text-xl  font-semibold">Aflal</p>
          <Toggle />
        </div>
        <Link spy={true} to="Form" smooth={true} activeClass="activeClass">
          <button className=" absolute sm:hidden left-[220px]  button px-6 py-2 hover:bg-white">
            Contact
          </button>
        </Link>
      </div>

      {/* right */}
      <div className=" hidden  sm:block sm:flex  sm:flex-1 sm:items-center sm:justify-center font-normal gap-10">
        <ul className=" flex items-center gap-8 cursor-pointer">
          <Link spy={true} to="Intro" smooth={true} activeClass="activeClass">
            <li className=" hover:text-orange-300">Home</li>
          </Link>
          <Link
            spy={true}
            to="Services"
            smooth={true}
            activeClass="activeClass">
            <li className=" hover:text-orange-300">Services</li>
          </Link>
          <Link
            spy={true}
            to="Expreions"
            smooth={true}
            activeClass="activeClass">
            <li className=" hover:text-orange-300">Expreiences</li>
          </Link>
          <Link
            spy={true}
            to="Portfolio"
            smooth={true}
            activeClass="activeClass">
            <li className=" hover:text-orange-300">Portfolio</li>
          </Link>
          <Link spy={true} to="work" smooth={true} activeClass="activeClass">
            <li className=" hover:text-orange-300">Testimonials</li>
          </Link>
        </ul>
        <Link spy={true} to="Form" smooth={true} activeClass="activeClass">
          <button className="   button px-6 py-2 hover:bg-white">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Form() {
  const { dark } = useSelector((state) => state.darkState);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div id="Form" className=" h-[100vh]  sm:flex mt-32 sm:h-[70vh] ">
      {/* left */}
      <div className=" flex flex-col flex-1 relative">
        <div className=" absolute bg-rose-300 w-[700px] h-[400px] -left-12   outline-none opacity-10 blur"></div>
        {dark && dark ? (
          <span className=" text-6xl font-semibold text-white">
            Get in touch
          </span>
        ) : (
          <span className=" text-6xl font-semibold text-slate-600">
            Get in touch
          </span>
        )}

        <span className=" text-orange-300 text-5xl font-semibold">
          Contect me
        </span>
      </div>

      {/* right */}
      <div className=" mt-[50px] sm:mt-0 flex-1 sm:ml-8 relative">
        <div className=" absolute bg-sky-300 w-[700px] h-[400px] -left-12   outline-none opacity-10 blur"></div>
        <div className=" flex flex-col gap-5">
          <input
            className="border-2 border-orange-400 max-w-sm w-full p-2 rounded-lg outline-none z-10"
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleChange}
          />
          <input
            className="border-2 border-orange-400 max-w-sm w-full p-2 rounded-lg outline-none z-10"
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          <textarea
            className="border-2 border-orange-400 max-w-sm w-full p-2 rounded-lg outline-none z-10"
            type="text"
            placeholder="Message"
            id="message"
            onChange={handleChange}
          />
          <Link
            to={`mailto:${form.email}?subject=Regarding ${form.name}&body=${form.message}`}
            className=" z-10">
            <button className="button uppercase w-20 h-8 self-center  ">
              Send
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Expreions from "./components/Expreions";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const { dark } = useSelector((state) => state.darkState);
  const [darkValue, setDarkValue] = useState("");

  useEffect(() => {
    try {
      if (dark === true) {
        setDarkValue("darkmood");
      } else {
        setDarkValue("");
      }
    } catch (error) {
      console.log(error);
    }
  }, [dark]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className={`App p-5 sm:p-6 ${darkValue} `}>
                <NavBar />
                <Intro />
                <Services />
                <Expreions />
                <Work />
                <Portfolio />
                <Form />
                <Footer />
              </div>
            }
          />
          <Route path="/uploade" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import React from "react";
import About from "./About";
import Features from "./Features";
import Hero from "./Hero";
import Mission from "./Mission";
import NavBar from "./NavBar";
import Team from "./Team";
import Traits from "./Traits";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
function App() {
  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Mission />
        <Team />
        <Traits />
        <div className=" text-white text-xl text-center py-7">Surprised Women Club @2022</div>
    </>
  );
}

export default App;

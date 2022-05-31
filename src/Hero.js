import React from "react";
import s1 from "./assets/GirlsStip01.png";
import s2 from "./assets/GirlsStip02.png";
function Hero() {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="5000"
      className="text-white contain py-36 overflow-hidden "
    >
      <div className="cont">
        <img src={s1} alt="" className="md:scale-[8] scale-[26]" />
      </div>
      <div className="cont2 md:pt-64 pt-48">
        <img src={s2} alt="" className="md:scale-[8] scale-[26]" />
      </div>
    </div>
  );
}

export default Hero;

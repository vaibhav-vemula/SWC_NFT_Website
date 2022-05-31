import React from "react";
import supwom from "./assets/SW_Logo.png";
import girlanim from "./assets/GirlAnimation.gif";
import openseabut from "./assets/OpenseaLogoBig.png";

const About = () => {
  return (
    <>
      <div className="md:w-4/5 w-11/12 mx-auto md:pt-16 md:pb-36 pb-24">
        <div className="text-white h-full flex md:flex-row flex-col justify-evenly items-center">
          <div className="basis-1/2 flex flex-col items-center">
            <img src={supwom} alt="" className="w-[500px] pb-7" />
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="50"
              className="text-center leading-8 text-xl md:px-12 text-gray-400 pb-16 md:pb-7"
            >
              Surprised women Society was created by Crypto enthusiasts, artist,
              gamers, and professionals with the goal of bringing something
              unique and special to the hearts of NFT collectors. The project
              has different themes that will be released throughout its journey.
            </p>
          </div>
          <div className="basis-1/2 flex flex-col items-center relative top-[-30px]">
            <img
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="50"
              src={girlanim}
              alt=""
              className="pb-9 h-80"
            />
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="50"
              className="text-4xl font-bold pb-5"
            >
              Buy It In
            </p>
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://opensea.io/collection/surprisedwomen"
              className="hover:shadow-2xl shadow-white"
            >
              <img
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="50"
                src={openseabut}
                alt=""
                className="w-56 hover:shadow-xl hover:shadow-indigo-500/40"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

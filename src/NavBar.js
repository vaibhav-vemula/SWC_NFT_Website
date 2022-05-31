import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import oslogo from "./assets/opensea-logo.png";

const NavBar = () => {
  return (
    <>
      <div>
        <div className="h-36 md:h-24 text-white flex md:flex-row flex-col justify-around items-center mt-9">
          <div className="text-4xl md:text-5xl tracking-widest text-gray-300 text-center">
            Surprised Women <br className="md:hidden" /> Club
          </div>
          <div>
            <div className="flex justify-center md:pt-0 pt-5">
              <a
                href="https:"
                className="mr-10"
                target="blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-4xl hover:text-[#C4092A]"
                />
              </a>
              <a
                href="https://twitter.com/OmprakashRaju4"
                className="mr-10"
                target="blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-4xl hover:text-[#C4092A]"
                />
              </a>
              <a
                href="https://www.instagram.com/surprisedwomen/"
                className="mr-10"
                target="blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-4xl hover:text-[#C4092A]"
                />
              </a>
              <a
                href="https://opensea.io/collection/surprisedwomen"
                target="blank"
                rel="noopener noreferrer"
              >
                <img src={oslogo} alt="OpenSea" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

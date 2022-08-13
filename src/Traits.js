import React from "react";

function Traits() {
  return (
    <div className="text-white w-11/12 md:w-3/5 mx-auto text-center md:pb-36 pb-16">
      <h1
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="50"
        className="md:text-5xl text-4xl uppercase font-bold tracking-wider pb-7"
      >
        Traits
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="50"
        className="text-lg md:text-xl text-gray-400 pb-10 leading-8"
      >
        All surprised women has 300+ hand drawn traits! And 10+ backgrounds
        are different by texture or design or hue.
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="50"
        className="text-lg md:text-xl text-gray-400 pb-12 leading-8"
      >
        Here at Surprised women, we believe in proper diversity, representation
        and of course aesthetically pleasing artwork that celebrates global
        women.
      </p>
      <div className="flex justify-center">
        <table
        data-aos="fade-up"
        data-aos-delay="50"
          className="table-fixed text-gray-400 text-lg md:text-xl"
          cellPadding={7}
        >
          <tr className="text-left ">
            <td className="pr-8">Hair</td>
            <td>- 150</td>
          </tr>
          <tr className="text-left">
            <td className="pr-8">Dress</td>
            <td>- 100</td>
          </tr>
          <tr className="text-left">
            <td className="pr-8">Skin</td>
            <td>- 10</td>
          </tr>
          <tr className="text-left">
            <td className="pr-8">Background</td>
            <td>– 10</td>
          </tr>
          <tr className="text-left">
            <td className="pr-8">Lips</td>
            <td>– 50</td>
          </tr>
          <tr className="text-left">
            <td className="pr-8">Eyes</td>
            <td>– 30</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Traits;

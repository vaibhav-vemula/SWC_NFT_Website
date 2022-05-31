import React from "react";
import TeamDets from "./TeamDets";

function Team() {
  return (
    <div className="md:w-11/12 text-white mx-auto text-center md:pb-36 pb-16">
      <h1
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="50"
        className="text-5xl uppercase font-bold tracking-wider pb-12"
      >
        Team
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-y-20 gap-y-8 w-full justify-items-center">
        {TeamDets.map((p) => {
          return (
            <>
              <div
                data-aos="fade-up-right"
                data-aos-delay="50"
                class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  class="object-cover w-full lg:h-80 h-[250px]"
                  src={p.image}
                  alt="Flower and sky"
                />
                <div class="absolute top-3 w-8/12 lg:w-1/2 ml-[28%] lg:ml-[40%] pl-6 py-4 text-left">
                  <h1 className="uppercase text-lg lg:text-3xl tracking-widest lg:pb-1">
                    {p.name}
                  </h1>
                  <h2 className="text-sm lg:text-2xl pb-2 lg:pb-4">{p.role}</h2>
                  <p className="text-gray-400 text-xs lg:text-sm">{p.desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Team;

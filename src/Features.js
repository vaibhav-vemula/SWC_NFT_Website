import React from "react";

const Features = () => {
  return (
    <div className="text-white md:w-3/5 mx-auto text-center md:pb-36 pb-16">
      <h1
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="50"
        className="md:text-5xl text-3xl uppercase font-bold text-center pb-9 tracking-wider"
      >
        What distinguishes us?
      </h1>
      <div data-aos="fade-up" data-aos-delay="50" className="w-11/12 mx-auto text-lg md:text-xl text-gray-400">
        <p className="pb-8 leading-8">
          10,000 unique of them is stored as an ERC721 token on the Ethereum
          blockchain.
        </p>
       
        <p className="pb-8 leading-8">
          Ownership and commercial usage rights given to the consumer over their
          NFT.
        </p>
        <p className="md:pb-8 leading-8">
          Community Defines Us. The community will be given back and
          contributions will be awarded.
        </p>
      </div>
    </div>
  );
};

export default Features;

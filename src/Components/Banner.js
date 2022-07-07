import React from "react";
import banner from "../Assets/Images/Banner.jpg";

const Banner = () => {
  return (
    <section>
      <div
        id="Home"
        className="flex lg:flex-row flex-col md:flex-row mx-16 justify-between h-[90vh] items-center"
      >
        <div className="flex-1 lg:order-1 order-2 lg:w-96">
          <h1 className="text-7xl font-bold py-6">Market Forecast</h1>
          <p className="lg:w-[600px] text-xl pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn h-16 px-16 text-xl bg-[#03031B]" type="">
            Get started
          </button>
        </div>
        <div className="flex-1 lg:order-1 order-1 mt-10">
          <img width={"800px"} src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

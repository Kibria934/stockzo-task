import React from "react";
import stockzo from "../Assets/Images/pic1.jpg";

const Stockzo = () => {
  return (
    <section>
      <div
        id="Home"
        className="flex mb-96 lg:mb-64 md:64 mt-32 mt-64 lg:flex-row flex-col md:flex-row mx-16 justify-between h-[90vh] items-center"
      >
        <div className="flex-1 lg:order-1 order-1 mt-10">
          <img
            className="md:w-[500px] w-[400px] lg:w-[600px]"
            src={stockzo}
            alt=""
          />
        </div>
        <div className="flex-1 lg:order-1 order-2 lg:w-96">
          <h1 className="text-7xl  font-bold py-6">
            <span className="text-xl">What is </span> <br />{" "}
            <span className="pt-9">Stockzo?</span>
          </h1>
          <p className="lg:w-[600px] text-xl pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button
            className="btn px-10 h-20 m-2  border-0 text-xl text-black hover:bg-[#03031B] hover:text-white bg-[#e6e5e5]"
            type=""
          >
            Stockzo Mission
          </button>
          <button
            className="btn px-10 h-20 m-2  border-0 text-xl text-black hover:bg-[#03031B] hover:text-white bg-[#e6e5e5]"
            type=""
          >
            The platform in detail
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stockzo;

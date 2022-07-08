import React from "react";
import contact from "../Assets/Images/contact.jpg";

const Contac = () => {
  return (
    <div className="bg-black p-5 text-white">
      <section className="flex sm:w-full xs:w-full lg:w-11/12 mx-auto lg:h-[80vh] lg:flex-row flex-col items-center w-full justify-evenly">
        <div data-aos="fade-right" data-aos-duration="2000" className="flex-1">
          <figure className="lg:mr-6 md:mr-6">
            <img className="" src={contact} alt="" />
          </figure>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex-1 mt-6"
        >
          <section>
            <h1 className="text-xl">
              Contact Us Now <br />
              <span className="text-5xl font-bold leading-relaxed">
                Ask a question
              </span>
            </h1>
            <p className="text-gray-500 lg:w-9/12 pr-6 py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </section>
          <form>
            <div className="flex flex-col lg:flex-row  md:flex-row ">
              <input
                type="text"
                placeholder="Full Name"
                class="input bg-transparent border-2 border-gray-400 rounded-none h-16  lg:w-64 mr-7 input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Email ID"
                class="input bg-transparent border-2 mt-2 lg:mt-0 md:mt-0 border-gray-400 rounded-none h-16 input-bordered w-full max-w-xs"
              />
            </div>
            <textarea
              rows=""
              placeholder="Message"
              className="w-9/12 p-7 bg-transparent border-2 h-32 border-gray-400 mt-5"
              cols=""
            ></textarea>
            <br />
            <section className="flex justify-center w-8/12">
              <button
                className="btn bg-white text-black px-16 rounded-none mt-6"
                type=""
              >
                Sent Message
              </button>
            </section>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contac;

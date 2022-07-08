import React from "react";

const ReviewCart = ({ width, indexNo, headLine }) => {
  return (
    <div>
      <div
        data-aos="fade-up"
        // data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
        className={`card lg:w-[${width}] lg:ml-16 md:w-[300px] m-3 rounded-none rounded-tr-3xl rounded-br-3xl  hover:bg-black lg:h-[450px] text-black bg-base-300 shadow-xl hover:text-white`}
      >
        <div class="card-body">
          <p className="text-4xl font-bold">{indexNo}</p>
          <h2 class="card-title text-2xl py-7">{headLine}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="card-actions justify-start">
            <button class="btn bg-white text-black">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;

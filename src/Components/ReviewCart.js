import React from "react";

const ReviewCart = ({ indexNo, headLine }) => {
  return (
    <div>
      <div class="card lg:w-[400px] lg:ml-16 md:w-[300px] m-3 rounded-none rounded-tr-3xl rounded-br-3xl bg-black lg:h-[400px] text-white ">
        <div class="card-body">
          <p className="text-4xl font-bold">{indexNo}</p>
          <h2 class="card-title text-2xl">{headLine}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="card-actions m-6 justify-start">
            <button class="btn bg-white text-black px-16">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;

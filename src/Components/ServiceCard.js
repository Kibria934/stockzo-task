import React from "react";

const ServiceCard = ({ img, headLine }) => {
  return (
    <div>
      <div class="card card-compact text-black md:w-[96] lg:h-[680px] md:w-[280px] lg:w-96 hover:bg-black rounded-tl-none rounded-bl-none border-2 hover:text-white rounded-tr-xl rounded-br-xl">
        <figure>
          <img className="bg-white" src={img} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl font-semibold py-3">{headLine}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <div class="card-actions justify-end">
            <button class="btn bg-white text-black">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

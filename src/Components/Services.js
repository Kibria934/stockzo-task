import React from "react";
import ServiceCard from "./ServiceCard";
import pic2 from "../Assets/Images/pic2.png";
import pic3 from "../Assets/Images/pic3.png";
import { TbBulb } from "react-icons/tb";

const Services = () => {
  return (
    <div>
      <div className="grid mb-20 lg:grid-cols-3 gap-10 hover:border-0 lg:w-11/12 mx-auto md:grid-cols-2 grid-cols-1">
        <div className="h-[600px] lg:w-96 items-center flex">
          <h1>
            <span className="my-10">Services</span>
            <br />
            <span className="text-5xl text-[black] font-bold pt-10">
              Check Out Our Specialized Services
            </span>
          </h1>
        </div>
        <ServiceCard headLine={"Discound Broaking"} img={pic2} />
        <ServiceCard headLine={"Portfolio Match"} img={pic3} />
      </div>
    </div>
  );
};

export default Services;

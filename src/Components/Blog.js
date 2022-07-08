import React from "react";
import ReviewCart from "./ReviewCart";
import { BsArrowRight } from "react-icons/bs";

const Blog = () => {
  return (
    <div className="mt-32 mb-32 mx-auto w-10/12">
      <h4 className="text-6xl text-center py-10 mt-32 font-bold py-5 pl-4">
        Blogs
      </h4>
      <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        <ReviewCart width={"500px"} headLine={"KATIDHAN"} />
        <ReviewCart
          width={"500px"}
          headLine={"Head of500px Strategic Marketing,ITCompany"}
        />
        <ReviewCart width={"500px"} headLine={"Abhay Gupta"} />
        <ReviewCart
          width={"500px"}
          headLine={"Head of Strategic Marketing,ITCompany"}
        />
      </section>
      <div className="flex justify-center">
        <button
          className="mt-24 btn bg-black text-white px-20 rounded-none h-16"
          type=""
        >
          See More
          <span className="ml-6">
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Blog;

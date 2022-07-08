import React from "react";
import ReviewCart from "./ReviewCart";

const Review = () => {
  return (
    <div className="mt-32 mx-auto w-10/12">
      <h4 className="text-6xl font-bold py-5 pl-4">
        Here ’s what our users have to say:
      </h4>
      <section className="flex flex-wrap">
        <ReviewCart indexNo={"01"} width={"400px"} headLine={"KATIDHAN"} />
        <ReviewCart
          indexNo={"02"}
          width={"400px"}
          headLine={"Head of Strategic Marketing,ITCompany"}
        />
        <ReviewCart width={"400px"} indexNo={"03"} headLine={"Abhay Gupta"} />
      </section>
    </div>
  );
};

export default Review;

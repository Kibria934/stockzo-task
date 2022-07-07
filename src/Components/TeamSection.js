import React from "react";
import Avatar from "./Avatar";

const TeamSection = () => {
  return (
    <div>
      <h5 className="text-center lg:mt-32 text-5xl font-bold text-black">
        Our Team
      </h5>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-9/12 mx-auto justify-center lg:grid-cols-3">
        <Avatar />
        <Avatar />
        <Avatar />
      </section>
    </div>
  );
};

export default TeamSection;

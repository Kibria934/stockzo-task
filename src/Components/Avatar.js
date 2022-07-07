import React from "react";

const Avatar = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center p-8">
      <div class="avatar placeholder">
        <div class="bg-[black] text-neutral-content  rounded-full w-64">
          <span class="text-3xl">K</span>
        </div>
      </div>
      <section className="text-center">
        <p>lorem ipsum doller asungt</p>
        <h2 className="text-3xl font-semibold">Full Name</h2>
        <p>lorem ipsum doller asungt</p>
      </section>
    </div>
  );
};

export default Avatar;

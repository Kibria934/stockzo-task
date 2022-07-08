import React from "react";
import pic4 from "../Assets/Images/pic4.jpg";

const Login = () => {
  return (
    <div class="heroSection mt-28 items-center flex lg:w-full h-screen ">
      <div class=" flex-shrink-0 lg:ml-10 md:ml-10 pl-3 lg:w-96">
        <div class="">
          <h1 className="lg:text-5xl py-4 font-bold">
            Hello! <br /> Good Morning
          </h1>
          <p className="text-2xl medium pb-5">Log in your account</p>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder=""
              class="bg-transparent w-[100px] lg:w-full border-b-2 border-dashed outline-0"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text float-right">Password</span>
            </label>
            <input
              type="text"
              class="bg-transparent border-b-2 border-dashed outline-0"
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn bg-black">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

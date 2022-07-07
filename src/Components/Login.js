import React from "react";
import pic4 from "../Assets/Images/pic4.jpg";

const Login = () => {
  return (
    <div class="heroSection mt-28 items-center flex w-full h-screen ">
      <div class=" flex-shrink-0 ml-10 w-96">
        <div class="">
          <h1 className="text-5xl py-4 font-bold">
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
              class="bg-transparent border-b-2 border-dashed outline-0"
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

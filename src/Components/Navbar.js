import React from "react";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="z-50 bg-base-50">
      <div class="navbar h-20 shadow-xl text-2xl">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#Home">HOME</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">ABOUT</a>
              </li>
              <li>
                <a>LOGIN</a>
              </li>
              <li>
                <a>BLOGS</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
              <li>
                <span>
                  <BsTwitter />
                  <AiFillInstagram />
                  <BsFacebook />
                </span>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost lg:ml-10 normal-case font-bold text-3xl">
            STOCKZO
          </a>
        </div>
        <div class="navbar-end lg:mr-10 hidden lg:flex">
          <ul class="menu menu-horizontal font-medium p-0">
            <li className="hover:border-b-4 border-black active:border-b-4">
              <a href="#Home">HOME</a>
            </li>
            <li className="hover:border-b-4 border-black active:border-b-4">
              <a>ABOUT</a>
            </li>
            <li className="hover:border-b-4 border-black active:border-b-4">
              <a>LOGIN</a>
            </li>
            <li className="hover:border-b-4 border-black active:border-b-4">
              <a>BLOGS</a>
            </li>
            <li className="hover:border-b-4 border-black active:border-b-4">
              <a>CONTACT</a>
            </li>
            <li>
              <a>
                <BsTwitter />
              </a>
            </li>
            <li>
              <a>
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a>
                <BsFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

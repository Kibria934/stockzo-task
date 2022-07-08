import React from "react";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import footer1 from "../Assets/Images/footer.jpg";

const Footer = () => {
  return (
    <div>
      <footer
        data-aos="fade-up"
        data-aos-duration="2000"
        class="footer pt-20 p-10 bg-base-200 text-base-content"
      >
        <div className="text-xl font-semibold">
          <span class=" text-5xl font-bold text-black">Stockzo</span>
          <a class="footer-title">0123456789</a>
          <a class="footer-title">info @STOCK Z O .de</a>
          <a class="footer-title">Vishala Complex, 1st Floo r</a>
          <a class="footer-title">
            Sector 7 , HS R Layout , Bangalore , Karnataka , 560102.
          </a>
          <a class="">
            <span className="text-4xl flex">
              <BsTwitter />
              <AiFillInstagram />
              <BsFacebook />
            </span>
          </a>
        </div>
        <div className="text-xl font-semibold">
          <span class="text-4xl text-black">MENU</span>
          <a class="footer-title">Home</a>
          <a class="footer-title">About us</a>
          <a class="footer-title">Login</a>
          <a class="footer-title">Contact</a>
        </div>
        <div>
          <span class="text-3xl text-black font-semibold">Newsletter</span>
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </label>
            <div class="relative mt-6">
              <input
                type="text"
                placeholder="Subscribe"
                class="input h-16 input-bordered w-full pr-16"
              />
              <button class="btn h-16 bg-black absolute top-0 right-0 rounded-l-none">
                Done
              </button>
            </div>
            <img className="mt-5 w-96 p-5" src={footer1} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

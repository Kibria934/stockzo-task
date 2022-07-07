import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Stockzo from "../Components/Stockzo";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stockzo />
      <Services />
    </div>
  );
};

export default Home;

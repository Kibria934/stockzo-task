import React from "react";
import Banner from "../Components/Banner";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Stockzo from "../Components/Stockzo";
import TeamSection from "../Components/TeamSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Stockzo />
      <Services />
      <TeamSection />
      <Login />
    </div>
  );
};

export default Home;

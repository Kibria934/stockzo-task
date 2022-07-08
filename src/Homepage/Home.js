import React from "react";
import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Contac from "../Components/Contac";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Review from "../Components/Review";
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
      <Review />
      <Blog />
      <Contac />
      <Footer />
    </div>
  );
};

export default Home;

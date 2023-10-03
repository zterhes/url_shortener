import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Shortener } from "../components/Shortener";

const Home = () => {
  return (
    <div className="py-10 md:px-48">
      <Header />
      <Hero />
      <Shortener />
      <h1 className="font-poppins">test with classname</h1>
      <h1>test</h1>
      <h1 className="font-poppins">test with classname</h1>
      <h1>test</h1>
      <h1 className="font-poppins">test with classname</h1>
      <h1>test</h1>
      <h1 className="font-poppins">test with classname</h1>
      <h1>test</h1>
      <h1 className="font-poppins">test with classname</h1>
      <h1>test</h1>
      <h1>test with classname</h1>
      <h1>test</h1>
      <Footer />
    </div>
  );
};

export default Home;

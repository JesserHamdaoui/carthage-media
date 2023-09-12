import React from "react";
import Hero from "./home/Hero";
import AboutUs from "./home/AboutUs";
import Services from "./home/Services";
import Contact from "./home/Contact";
import Book from "./home/Book";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Carthage Media</title>
        <meta
          name="description"
          content="Carthage Media offers comprehensive digital marketing solutions to excavation contractors, including SEO, PPC, social media management, web design, and reputation management. Boost your business growth today."
        ></meta>
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Book />
    </>
  );
};

export default Home;

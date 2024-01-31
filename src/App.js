import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <Services />
      <Experience />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;

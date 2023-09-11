import React from "react";
import Header from "./Components/Header";
import GlobalStyle from "./Components/Reset/Reset";
import HomePage from "./Components/HomePage";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Carousel from "./Components/Projects";
import '../src/index.css';
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomePage />
      <AboutMe />
      <Skills />
      <Carousel />
      <Footer />
      
    </>
  );
}

export default App;

import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import LightNav from "./components/lightNav/LightNav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import { Helmet } from "react-helmet";
import favicon from "./favicon.ico";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TheoBlm-portfolio</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
      <Info></Info>
      <Header />
      <Nav />
      <LightNav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HashRouter as Router } from "react-router-dom"; // Add this import
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleBg from "./components/Particle";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ParticleBg />
      <Navbar />
      <Hero />
      <ParallaxProvider>
        <About />
      </ParallaxProvider>
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;

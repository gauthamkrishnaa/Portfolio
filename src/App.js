import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './styles.css';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <section>
        <Projects /> {/* Make sure Projects is rendering correctly */}
      </section>
      <Footer /> {/* Footer should appear after the section */}
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import TimeStoneLoader from './components/TimeStoneLoader';
import CanvasMagic from './components/CanvasMagic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#050508] text-gray-100 flex flex-col items-center justify-start overflow-x-hidden">
      {/* Initial Pulsing Emerald Time-Stone Transition Loader */}
      <TimeStoneLoader onLoaded={() => setLoaded(true)} />

      {/* Background Interactive Particle Canvas */}
      <CanvasMagic />

      {/* Floating Mystic Navbar */}
      <Navbar />

      {/* Main Dimension Stream */}
      <main className="w-full flex flex-col items-center justify-start z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Strengths />
        <Contact />
      </main>

      {/* Mystic Seal Footer */}
      <Footer />
    </div>
  );
}

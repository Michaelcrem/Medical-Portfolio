import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import EducationSection from './components/EducationSection/EducationSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import ContactSection from './components/ContactSection/ContactSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Banner'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About/>
      <Projects />
      <Skills/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

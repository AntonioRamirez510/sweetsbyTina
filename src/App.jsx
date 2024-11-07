import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
const App = () => {

  return (
    <Router>
      <div className="main">
        <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;

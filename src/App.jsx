import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Cupcakes from './components/gallery-components/Cupcakes';
import Sweets from './components/gallery-components/Sweets';
import Cakes from './components/gallery-components/Cakes';
import Shooters from './components/gallery-components/Shooters';
const App = () => {

  return (
    <Router>
      <div className="main">
        <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cupcakes" element={<Cupcakes />} />
            <Route path="/shooters" element={<Shooters />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/sweets" element={<Sweets />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;

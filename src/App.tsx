// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import techImg1 from './assets/tech0.jpg';
import techImg2 from './assets/tech1.webp';
import techImg3 from './assets/tech2.jpeg';
import techImg4 from './assets/tech9.jpg';
import techImg5 from './assets/tech8.jpg';
import Careers from './components/Careers';


import Products from './components/Products'; // Import the Product component
import './App.css';



function App() {
  const images = [techImg1, techImg2, techImg3, techImg4, techImg5];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <section>
                    <ImageSlider images={images} />
                  </section>

                  
                </>
              } />
              <Route path="/Products" element={<Products />} />
              <Route path="/careers.html" element={<Careers />} />

              
              
            </Routes>
          </main>
        </div>
  <Footer />
      </div>
    </Router>
  
  );
}

export default App;
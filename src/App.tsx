// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import techImg1 from './assets/tech8.jpg';
import techImg2 from './assets/tech9.jpg';
import techImg3 from './assets/tech8.jpg';
import techImg4 from './assets/tech9.jpg';
import techImg5 from './assets/tech8.jpg';
import './App.css';

function App() {
  const images = [techImg1, techImg2, techImg3, techImg4, techImg5];

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <main>
          <section>
            <ImageSlider images={images} />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

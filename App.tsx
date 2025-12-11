import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import OrderForm from './components/OrderForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Features />
        <OrderForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

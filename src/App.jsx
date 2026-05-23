import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import Divisions from './components/Divisions';
import Cta from './components/Cta';
import Footer from './components/Footer';


export default function App() {
  
  
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;

      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    // Run once on load to reveal anything currently on screen
    handleScroll();

    // Listen for scrolling
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroCarousel />
      <About />
      <Divisions />
      <Cta />
      <Footer />
    </div>
  );
}
import { useState, useEffect, useCallback, useRef } from 'react';

export default function HeroCarousel() {
  const slides = [
    {
      bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
      title: 'Integrated Marketing &amp; <span class="text-[#8DC63F]">Communications</span>',
      subtitle: 'Data-driven, strategy-led, and execution-focused.',
      description: 'Data-driven, strategy-led, and execution-focused solutions managing brands across their full lifecycle. Includes brand creative, digital media, PR, and experiential marketing.',
    },
    {
      bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      title: 'Technology &amp; <span class="text-[#8DC63F]">ICT</span>',
      subtitle: 'Digital infrastructure and transformation enablement.',
      description: 'Technology enablement, digital infrastructure, and UI/UX solutions supporting operational efficiency and digital transformation. Includes systems integration and online tech retail.',
    },
    {
      bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
      title: 'Strategy &amp; <span class="text-[#8DC63F]">Compliance</span>',
      subtitle: 'Governance, procurement, and strategy execution.',
      description: 'Operating at the intersection of governance, public-sector procurement, and strategy execution. Expertise in BBBEE advisory, framework agreements, and tender management.',
    },
    {
      bg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
      title: 'Advisory &amp; <span class="text-[#8DC63F]">Training</span>',
      subtitle: 'Building internal capability through execution-focused services.',
      description: 'Execution-focused services aimed at building internal capability. Offering public-sector procurement training, board support, and organizational development programs.',
    },
    {
      bg: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
      title: 'Trade &amp; <span class="text-[#8DC63F]">Investment</span>',
      subtitle: 'Connecting buyers, sellers, and international markets.',
      description: 'Facilitating commercial transactions, trade shows, and investment linkages. Acting as a connector between buyers, sellers, investors, and international markets.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const touchStartX = useRef(0);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // 1. Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // 2. Keyboard Navigation (Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // 3. Mouse Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 4. Touch/Swipe Support
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section
      className="hero-carousel"
      id="heroCarousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* BACKGROUNDS WITH PARALLAX */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide-bg ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url('${slide.bg}')`,
            transform: index === currentSlide ? `scale(1.03) translate(${mousePos.x}px, ${mousePos.y}px)` : '',
          }}
        />
      ))}

      <div className="slide-overlay"></div>
      <div className="hero-grid"></div>

      {/* NAVIGATION ARROWS */}
      <button
        className="carousel-arrow left-6 lg:left-10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        className="carousel-arrow right-6 lg:right-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-4xl">
          <div className="slide-content fade-in" key={currentSlide}>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#8DC63F] pulse-indicator"></div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#8DC63F] font-bold">
                Integrated Enterprise Solutions
              </p>
            </div>

            <h1
              className="text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.04em] text-white mb-8"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            />

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-4">
              {slides[currentSlide].subtitle}
            </p>

            <p className="text-base text-gray-400 max-w-2xl leading-relaxed mb-10">
              {slides[currentSlide].description}
            </p>

            <div className="glass-panel rounded-2xl p-4 inline-flex flex-wrap gap-4 mb-14">
              <a href="#divisions" className="primary-btn bg-[#8DC63F] text-gray-900 font-black px-8 py-4 rounded-xl">
                Explore Divisions
              </a>
              <a href="#contact" className="secondary-btn border border-white/20 text-white font-semibold px-8 py-4 rounded-xl">
                Talk To Us
              </a>
            </div>

            {/* THE STATS YOU BUILT */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div>
                <h2 className="text-4xl font-black text-[#8DC63F]">5+</h2>
                <p className="text-gray-400 text-sm">Strategic Divisions</p>
              </div>
              <div>
                <h2 className="text-4xl font-black text-[#8DC63F]">360°</h2>
                <p className="text-gray-400 text-sm">Integrated Solutions</p>
              </div>
              <div>
                <h2 className="text-4xl font-black text-[#8DC63F]">24/7</h2>
                <p className="text-gray-400 text-sm">Strategic Support</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* NAVIGATION DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
          >
            <span className="dot-progress"></span>
          </button>
        ))}
      </div>
    </section>
  );
}
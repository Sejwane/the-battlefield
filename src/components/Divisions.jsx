import { useState, useEffect } from 'react';

// 1. Data Structure
const divisionsData = [
  {
    id: 1,
    title: "Integrated Marketing & Communications",
    teaser: "Data-driven brand management and experiential marketing.",
    fullDesc: "Data-driven, strategy-led, and execution-focused solutions managing brands across their full lifecycle. Includes brand creative, digital media, PR, and experiential marketing.",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" 
  },
  {
    id: 2,
    title: "Technology & ICT",
    teaser: "Digital infrastructure and transformation enablement.",
    fullDesc: "Technology enablement, digital infrastructure, and UI/UX solutions supporting operational efficiency and digital transformation. Includes systems integration and online tech retail.",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 3,
    title: "Strategy & Compliance",
    teaser: "Governance, public-sector procurement, and execution.",
    fullDesc: "Operating at the intersection of governance, public-sector procurement, and strategy execution. Expertise in BBBEE advisory, framework agreements, and tender management.",
    bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 4,
    title: "Advisory & Training",
    teaser: "Building internal capability through execution.",
    fullDesc: "Execution-focused services aimed at building internal capability. Offering public-sector procurement training, board support, and organizational development programs.",
    bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 5,
    title: "Trade & Investment",
    teaser: "Connecting buyers, sellers, and global markets.",
    fullDesc: "Facilitating commercial transactions, trade shows, and investment linkages. Acting as a connector between buyers, sellers, investors, and international markets.",
    bgImage: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80"
  }
];

// 2. The Card Component
function DivisionCard({ data, onOpen }) {
  return (
    <div 
      onClick={() => onOpen(data)}
      className="relative h-[420px] rounded-[32px] overflow-hidden group shadow-xl bg-[#0F172A] cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110" 
        style={{ backgroundImage: `url(${data.bgImage})` }} 
      />
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent/0">
        <h3 className="text-3xl font-black text-white mb-2 leading-tight drop-shadow-md transition-transform duration-500 group-hover:-translate-y-2">
          {data.title}
        </h3>
        <p className="text-gray-200 text-sm mb-6 line-clamp-2 drop-shadow-md transition-transform duration-500 group-hover:-translate-y-2">
          {data.teaser}
        </p>
        <button 
          className="self-end bg-[#8DC63F] text-gray-900 font-black text-sm px-7 py-3 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(141,198,63,0.3)] group-hover:bg-white group-hover:shadow-[0_8px_25px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

// 3. The Main Container & Full-Screen Modal
export default function Divisions() {
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (division) => {
    setSelectedDivision(division);
    setTimeout(() => setIsModalOpen(true), 10);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedDivision(null), 500); 
  };

  useEffect(() => {
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <section id="divisions" className="py-28 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="uppercase tracking-[0.25em] text-[#8DC63F] font-bold text-sm mb-5">
            Core Service Pillars
          </p>
          <h2 className="text-5xl font-black tracking-[-0.04em] mb-6 text-gray-900">
            Strategic Divisions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enterprise capabilities designed to move organizations from strategy to execution.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {divisionsData.map((division) => (
            <DivisionCard key={division.id} data={division} onOpen={handleOpen} />
          ))}
        </div>
      </div>

      {/* =========================================
          THE FULL-SCREEN IMMERSIVE MODAL
      ========================================= */}
      
      {/* Blurred Backdrop */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#0F172A]/80 backdrop-blur-md transition-opacity duration-500 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleClose}
      />

      {/* The 95vh Sliding Sheet */}
      <div 
        className={`fixed bottom-0 left-0 w-full z-[101] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] transform ${isModalOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="bg-[#111827] w-full max-w-5xl mx-auto rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] relative h-[95vh] flex flex-col overflow-hidden border-t border-white/10">
          
          {/* Top UI Controls (Absolute positioned over the image) */}
          <div className="absolute top-0 left-0 w-full z-20 p-6 flex justify-between items-start pointer-events-none">
            
            {/* Drag Pill */}
            <div 
              className="w-16 h-1.5 bg-white/40 rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-4 pointer-events-auto hover:bg-white transition-colors cursor-pointer" 
              onClick={handleClose} 
            />
            
            <div className="flex-1"></div>
            
            {/* Glass Close Button */}
            <button 
              onClick={handleClose} 
              className="text-white bg-black/30 hover:bg-black/60 backdrop-blur-md hover:scale-110 active:scale-90 transition-all duration-300 p-3 rounded-full pointer-events-auto"
              aria-label="Close details"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Dynamic Content Injection */}
          {selectedDivision && (
            <>
              {/* Massive Hero Header Image */}
              <div 
                className="w-full h-[45%] relative bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${selectedDivision.bgImage})` }}
              >
                {/* Gradient that fades seamlessly into the #111827 background color */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
              </div>

              {/* Text Content Area */}
              <div className={`px-8 md:px-16 pb-12 flex-grow overflow-y-auto relative z-10 -mt-16 transition-all duration-700 delay-200 transform ${isModalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                <p className="uppercase tracking-[0.25em] text-[#8DC63F] font-bold text-xs mb-4 flex items-center gap-2 drop-shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse"></span>
                  Division Details
                </p>
                
                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
                  {selectedDivision.title}
                </h3>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl">
                  {selectedDivision.fullDesc}
                </p>
                
                <div className="flex gap-4 pb-8">
                  <a 
                    href="#contact" 
                    onClick={handleClose} 
                    className="inline-block bg-[#8DC63F] text-gray-900 font-black px-10 py-5 rounded-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_25px_rgba(141,198,63,0.3)]"
                  >
                    Engage Division
                  </a>
                </div>
              </div>
            </>
          )}
          
        </div>
      </div>
    </section>
  );
}
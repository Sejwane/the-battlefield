export default function Cta() {
  return (
    <section className="py-28 bg-[#111827] relative overflow-hidden" id="projects">
      
      {/* Subtle Background Glow Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(141,198,63,0.4),transparent_30%)]" />
      </div>

      {/* Main Content (with scroll reveal) */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 reveal">
        
        <p className="uppercase tracking-[0.25em] text-[#8DC63F] font-bold text-sm mb-6 flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-[#8DC63F]"></span>
          Strategic Partnership
          <span className="w-8 h-[1px] bg-[#8DC63F]"></span>
        </p>
        
        <h2 className="text-5xl font-black text-white leading-tight tracking-[-0.04em] mb-8 drop-shadow-lg">
          Building Enterprise<br />Solutions For The Future
        </h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Partner with a multidisciplinary organization focused on scalable innovation and execution.
        </p>
        
        {/* Upgraded Lively Button */}
        <a 
          href="#contact"
          className="inline-block bg-[#8DC63F] text-gray-900 font-black px-10 py-5 rounded-2xl transition-all duration-300 shadow-[0_10px_25px_rgba(141,198,63,0.2)] hover:bg-white hover:scale-105 active:scale-95 hover:shadow-[0_15px_35px_rgba(141,198,63,0.4)]"
        >
          Start A Conversation
        </a>
        
      </div>
    </section>
  );
}
export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Column 1: Heading */}
          <div className="reveal">
            <p className="uppercase tracking-[0.25em] text-[#8DC63F] font-bold text-sm mb-6">
              Enterprise Thinking
            </p>
            <h2 className="text-5xl font-black leading-tight tracking-[-0.04em]">
              Integrated Solutions<br />For Modern Organizations
            </h2>
          </div>
          
          {/* Column 2: Context */}
          <div className="reveal">
            <p className="text-lg text-gray-600 leading-relaxed">
              The Battlefield integrates marketing, ICT, governance, compliance, advisory, and investment
              solutions into one strategic ecosystem.
            </p>
          </div>
          
          {/* Column 3: Value Proposition */}
          <div className="reveal">
            <p className="text-lg text-gray-600 leading-relaxed">
              We help organizations modernize operations, improve visibility, optimize compliance, and scale
              impact.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
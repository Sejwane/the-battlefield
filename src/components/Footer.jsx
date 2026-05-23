import logo from '../assets/logo_black.png'; 

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B1220] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/5 border border-white/5 rounded-[32px] p-12">
          <div className="grid lg:grid-cols-4 gap-12">

            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                
                <img 
                  src={logo} 
                  alt="The Battlefield Logo" 
                  className="w-12 h-12 object-contain drop-shadow-md" 
                />
                <div>
                  <h3 className="font-black tracking-wider text-white">THE BATTLEFIELD</h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Holdings</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                An Integrated Marketing &amp; Information Communications Technology (ICT) Company.
              </p>
              <p className="text-gray-500 text-xs">
                Company Reg No: 2019/377556/07<br />Tax Number: 9790396171
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-[#8DC63F] mb-6">Quick Links</h4>
              <div className="space-y-4 text-gray-400">
                <a href="#divisions" className="block hover:text-white transition">Our Divisions</a>
                <a href="#" className="block hover:text-white transition">Digital &amp; Web Solutions</a>
                <a href="#" className="block hover:text-white transition">The BattlefieldOnline</a>
                <a href="#" className="block hover:text-white transition">Governance &amp; Compliance</a>
              </div>
            </div>

            {/* Head Office (Spans 2 columns) */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-[#8DC63F] mb-6">Head Office</h4>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    Nelson Mandela Square, 2nd Floor, West Towers.<br />
                    Corner Maude and 5th Street<br />
                    Sandton, 2196. Gauteng, South Africa
                  </span>
                </p>
                
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +27101416191 | +2781 439 4565
                </p>
                
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:admin@thebattlefieldholdings.com" className="hover:text-white transition">
                    admin@thebattlefieldholdings.com
                  </a>
                </p>
                
                <p className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <a href="http://www.thebattlefieldholdings.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    www.thebattlefieldholdings.com
                  </a>
                </p>
                
              </div>
            </div>
            
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2026 The Battlefield (Pty) Ltd. All rights reserved.</p>
            <p className="mt-2 md:mt-0">D. A Kgonyane (Director). MBA. (Marketing)</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
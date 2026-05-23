import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <header className="navbar fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
          <img 
                src={logo} 
                alt="The Battlefield Logo" 
                className="w-16 h-16 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300" 
                />
            <div>
              <h1 className="font-black tracking-wider text-[#4A6741]">
                THE BATTLEFIELD
              </h1>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Holdings
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#" className="nav-link text-sm font-semibold">Home</a>
            <a href="#about" className="nav-link text-sm font-semibold">About</a>
            <a href="#divisions" className="nav-link text-sm font-semibold">Divisions</a>
            <a href="#projects" className="nav-link text-sm font-semibold">Projects</a>
            <a href="#contact" className="nav-link text-sm font-semibold">Contact</a>
          </nav>
          
        </div>
      </div>
    </header>
  );
}
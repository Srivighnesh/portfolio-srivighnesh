export default function Header() {
  return (
    <header className="sticky top-0 px-6 md:px-12 py-5 flex justify-between items-center backdrop-blur-md bg-slate-900/40 border-b border-amber-400/20 z-50 rgb-border-header shadow-lg">
      <div className="logo flex items-center transform hover:scale-110 transition-transform">
        <div className="relative">
          <img src="/Logos/batman.png" alt="Logo" className="w-12 h-12 rounded-lg shadow-lg " />
        </div>
      </div>
      <nav className="flex gap-8 md:gap-12">
        <a
          href="#about"
          className="text-sm md:text-base font-bevan font-semibold text-gray-300 hover:text-amber-400 transition-all duration-300 relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="#resume"
          className="text-sm md:text-base font-bevan font-semibold text-gray-300 hover:text-amber-400 transition-all duration-300 relative group"
        >
          Resume
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a
          href="contact"
          className="text-sm md:text-base font-bevan font-semibold text-gray-300 hover:text-amber-400 transition-all duration-300 relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
        </a>
      </nav>
    </header>
  )
}


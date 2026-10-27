

export default function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center items-center px-6 md:px-12 py-20 overflow-hidden">
      {/* Background gradient overlay
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-4xl w-full text-center animate-slideUp">
        <div className="mb-6">
          <h1  className=" hero-h1 text-xs md:text-2xl font-bevan font-normal tracking-wider text-gray-300 mb-3">
            I'm a passionate Software Engineer
          </h1>
        </div>

        <div className="mb-8">
          <span className="hero-name">
          Sircilla Srivghnesh
          </span>
        </div>

        <div className="mb-12">
          <h3 className="hero-h3">
          Tech Enthusiast | CinePhile
          </h3>
        </div>

        <p className="text-gray-300 text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting beautiful, scalable, and efficient solutions with modern technologies.
          Transforming ideas into impactful digital experiences.
        </p>
{/* 
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="block">
            <button className="btn-gradient text-black font-bold px-8 py-3 rounded-lg relative overflow-hidden group">
              <span className="relative z-10">Get In Touch</span>
            </button>
          </a>
          <a href="#resume" className="block">
            <button className="px-8 py-3 rounded-lg border-2 border-amber-400 text-amber-400 font-bold hover:bg-amber-400/10 transition-all duration-300">
              View Resume
            </button>
          </a>
        </div> */}

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}


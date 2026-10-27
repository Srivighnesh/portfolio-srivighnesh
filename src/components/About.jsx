function About() {

  return (
    <section id="about" className="px-6 md:px-12 py-16 md:py-20 animate-fadeIn [animation-delay:300ms]">
      <div className="max-w-4xl mx-auto animate-fadeIn [animation-delay:300ms]">

        <h2 className="animate-pulse cards-h2 text-3xl md:text-4xl font-alfa-slab font-bold mb-8 text-left ">
          About Me
        </h2>

        <div
          className="glass-effect rounded-2xl p-8 md:p-12 border border-amber-400/20 shadow-2xl shadow-amber-400/10 card-hover"
        >
          <div className="space-y-6">
            <p className="text-wrap text-gray-200 font-alfa-slab  md:text-lg leading-relaxed sm:text-justify ">
                I work with Java, Selenium, and full-stack tools to build fast, reliable solutions. Outside of coding, I enjoy photography and filmmaking—because 
                storytelling isn’t just for films, it’s for code too. 
            </p>

            <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className=" rounded-s-none  bg-blue-500/10 rounded-lg p-4 text-center border border-blue-400/20">
                <div className="text-2xl font-bold text-amber-400 mb-2">3+</div>
                <div className="text-sm text-gray-300">Years in Tech</div>
              </div>

              <div className="bg-purple-500/10  p-4 rounded-lg text-center border border-purple-400/20">
                <div className="text-2xl font-bold text-amber-400 mb-2">5+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>

              <div className="bg-pink-500/10  p-4 rounded-lg text-center border border-pink-400/20">
                <div className="text-2xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Passion Driven</div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default About
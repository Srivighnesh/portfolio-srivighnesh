function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-alfa-slab font-bold mb-12 text-center">
          Get In Touch
        </h2>

        <div className="glass-effect border border-pink-400/20 rounded-2xl p-8 md:p-12">
          <p className="text-center text-gray-300 mb-10 text-lg">
            Have a question or ready to start a project? I'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Email */}
            <a href="mailto:srivighnesh648@gmail.com" className="group">
              <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-400/20 rounded-xl p-6 text-center card-hover">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="text-pink-400 font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-sm hover:text-pink-300 transition-colors break-all">
                  srivighnesh648@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-xl p-6 text-center card-hover">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-blue-400 font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">
                  +91 8106433061
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="group">
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-400/20 rounded-xl p-6 text-center card-hover">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-emerald-400 font-semibold mb-2">Location</h3>
                <p className="text-gray-300 text-sm">
                  Jagtial, Telangana, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/50">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-slate-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full btn-gradient text-black font-bold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
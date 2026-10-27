function Footer() {
  return (
    <footer  className="px-6 md:px-12 py-5 text-center bg-gradient-to-r from-mist-800 via-mist-900 to-mist-950 border-t border-amber-400/20 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-300 text-base mb-2">
          Thanks for scrolling through my portfolio
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Let's create something amazing together
        </p>
        <div className="flex justify-center items-center gap-2 text-gray-400 text-xs">
          <span>© 2024 Sircilla Srivighnesh</span>
          <span>•</span>
          <span>Built with <span className="text-red-500">❤️</span> and React</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

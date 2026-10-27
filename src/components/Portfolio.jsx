import { useState } from 'react'

export default function Portfolio() {
  const photos = [
    { src: '/Image/image copy 2.png', alt: 'Photo 1', title: 'Moment One' },
    { src: '/Image/image copy 3.png', alt: 'Photo 2', title: 'Moment Two' },
    { src: '/Image/image copy 4.png', alt: 'Photo 3', title: 'Moment Three' },
    { src: '/Image/image copy 5.png', alt: 'Photo 4', title: 'Moment Four' },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-3xl md:text-4xl font-niconne font-bold text-center mb-4 text-transparent bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text">
          I froze time through photographs
        </h4>
        <p className="text-center text-gray-400 mb-12 text-base">
          Visual storytelling through the lens — capturing moments that matter
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl card-hover cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300 -z-10"></div>

              <div className="relative overflow-hidden rounded-xl bg-gray-900 aspect-square">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold text-lg">{photo.title}</p>
                    <p className="text-xs text-gray-300">Click to view</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-gradient text-black font-bold px-8 py-3 rounded-lg inline-block">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  )
}

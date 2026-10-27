
export default function Certifications() {
    const certifications = [
  {
    title: "AWS AI Practitioner",
    provider: "Amazon",
    year: "2029",
  },
  {
    title: "AWS Cloud Practitioner",
    provider: "Amazon",
    year: "2029",
  }
];

  return (
    <section className="px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="Crads-h2 text-3xl md:text-4xl font-alfa-slab font-bold mb-12 text-center">
          Certifications
        </h2>

        {/* Grid */}
        <div className="grid h-48 grid-cols-2 place-content-center gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-effect border border-emerald-400/20 rounded-xl p-5 card-hover group"
            >
              {/* Year */}
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 text-black rounded-lg px-3 py-2 font-bold text-sm w-fit mb-4 group-hover:shadow-lg group-hover:shadow-emerald-400/50 transition-shadow">
                Valid till {cert.year}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-2lg font-bold text-emerald-400 mb-2">
                {cert.title}
              </h3>

              {/* Provider */}
              <p className="text-gray-300 text-sm">
                {cert.provider}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
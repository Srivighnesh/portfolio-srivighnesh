
 function Experience() {
    const experiences = [
      {
      year: '2024 - Present',
      title: 'Software Engineer',
      company: 'HCL Technologies',
      location: 'India',
      description: 'Building scalable solutions with Java and modern frameworks',
      skills: ['Java', 'Spring Boot', 'Microservices', 'AWS']
    }
  ]

  return (
    <section id="resume" className="px-6 md:px-12 py-16 md:py-20" >
      <div className="max-w-4xl mx-auto">
        <h2 className="cards-h2 text-3xl md:text-4xl font-alfa-slab font-bold mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-6">
          {
          experiences.map((exp, index) => (
            <div key={index} className="glass-effect border border-amber-400/20 rounded-xl p-6 md:p-8 card-hover group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-black rounded-xl px-4 py-3 font-bold text-sm md:text-base text-center min-w-max h-fit group-hover:shadow-lg group-hover:shadow-amber-400/50 transition-shadow">
                    {exp.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className=" text-xl md:text-2xl font-bold text-amber-400 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 font-semibold mb-2">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-400/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </div>

        <div className="mt-12 p-8 glass-effect rounded-xl border border-purple-400/20 text-center">
          <p className="text-gray-300 mb-4">Want to know more about my experience?</p>
          <a href="#contact" className="inline-block">
            <button className="btn-gradient text-black font-bold px-6 py-2 rounded-lg">
              Get My Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience


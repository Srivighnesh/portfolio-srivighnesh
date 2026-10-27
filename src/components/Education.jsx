import { div } from "framer-motion/client"

 function Education() {
    const education =[{
      year: '2024 - Present',
      institution: 'Birla Institute of Technology and Science, Pilani (BITS Pilani)',
      degree: 'BSC Computing and Design',
      location: 'Hyderabad, Telangana',
      // gpa: '3.8/4.0'
    },
    {
      year: '2018 - 2022',
      institution: 'Sri chaithanya Collage',
      degree: 'Intermediate Education',
      location: 'Jagtial, Telangana',
      gpa: '10/10'
    }
  ]



  return (
    <section className="px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="Crads-h2 text-3xl md:text-4xl font-alfa-slab font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="glass-effect border border-emerald-400/20 rounded-xl p-6 md:p-8 card-hover group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 text-black rounded-xl px-4 py-3 font-bold text-sm md:text-base text-center min-w-max h-fit group-hover:shadow-lg group-hover:shadow-emerald-400/50 transition-shadow">
                    {edu.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-300 font-semibold mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-gray-400 mb-3">
                    📍 {edu.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-2 glass-effect rounded-xl border border-teal-400/20 text-center">
          <div className="mb-5">
            <div className="inline-block text-4xl mb-3">🎓</div>
            <p className="text-gray-300">Continuous learner committed to mastering modern technologies and best practices</p>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Education


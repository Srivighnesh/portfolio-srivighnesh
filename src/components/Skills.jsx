
function Skills() {
  const skills =[
    { name: 'Java', logo: '/Logos/java.png', color: 'from-orange-500 to-red-500' },
    { name: 'Selenium', logo: '/Logos/selenium.png', color: 'from-green-500 to-emerald-500' },
    { name: 'SQL', logo: '/Logos/sql-server.png', color: 'from-blue-500 to-cyan-500' },
    { name: 'Automation Testing', logo: '/Logos/testing.png', color: 'from-pink-500 to-rose-500' },
    { name: 'Gen Ai', logo: 'public/Logos/GenAi.png', color: 'from-pink-500 to-rose-500' },
    { name: 'HTML & CSS', logo: '/Logos/coding.png', color: 'from-yellow-500 to-amber-500' },
    { name: 'Spring Boot', logo: '/Logos/image copy.png', color: 'from-green-600 to-lime-500' },
    { name: 'AWS Cloud', logo: '/Logos/AWS-white.png', color: 'from-blue-600 to-blue-400' },
  ]

  return (
    <section className="glass-effect-skill relative py-6 md:py-8 rgb-border-skills">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        
        <h2 className="cards-h2 text-3xl md:text-4xl font-alfa-slab font-bold mb-12 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${skill.color} p-0.5 rounded-xl card-hover group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-slate-900/95 backdrop-blur px-4 py-5 rounded-lg text-center h-full flex flex-col items-center justify-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 mx-auto relative transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-100 text-sm font-semibold group-hover:text-amber-300 transition-colors">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

export default function Social() {
  const socialLinks = [
    {
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/srivighnesh',
      label: 'LinkedIn',
      color: 'text-blue-500 hover:text-blue-400',
      bgColor: 'bg-blue-500/10 hover:bg-blue-500/20'
    },
    {
      icon: 'fab fa-github',
      url: 'https://github.com',
      label: 'GitHub',
      color: 'text-gray-300 hover:text-white',
      bgColor: 'bg-gray-500/10 hover:bg-gray-500/20'
    },
    {
      icon: 'fab fa-twitter',
      url: 'https://twitter.com',
      label: 'Twitter',
      color: 'text-cyan-400 hover:text-cyan-300',
      bgColor: 'bg-cyan-500/10 hover:bg-cyan-500/20'
    },
    {
      icon: 'fab fa-instagram',
      url: 'https://instagram.com',
      label: 'Instagram',
      color: 'text-pink-500 hover:text-pink-400',
      bgColor: 'bg-pink-500/10 hover:bg-pink-500/20'
    },
  ]

  return (
    <section id="contact" className="px-6 py-8">
      <div className="flex justify-center items-center">
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className={`${social.bgColor} rounded-full p-4 transition-all duration-300 hover:scale-110 border border-gray-600/30 hover:border-gray-400/50 group`}
            >
              <i className={`${social.icon} text-2xl ${social.color} transition-colors`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}



const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Innovatech Solutions",
      period: "2022 - Present",
      description: "Leading a team of developers in building enterprise-level web applications using React, Node.js, and AWS. Implemented CI/CD pipelines that reduced deployment time by 40% and improved code quality.",
      skills: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"]
    },
    {
      title: "UX Designer & Frontend Developer",
      company: "DigitalCraft Agency",
      period: "2019 - 2022",
      description: "Designed and developed user interfaces for clients across fintech, healthcare, and e-commerce sectors. Created responsive designs and implemented them using modern frontend frameworks.",
      skills: ["Figma", "Vue.js", "SCSS", "User Research", "Responsive Design"]
    },
    {
      title: "Junior Web Developer",
      company: "TechStart Inc.",
      period: "2017 - 2019",
      description: "Developed and maintained websites for small to medium businesses. Collaborated with designers to implement responsive layouts and optimized website performance.",
      skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "SEO"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative mb-12 md:ml-16 stagger-child"
                style={{ '--stagger-delay': `${index * 200}ms` } as React.CSSProperties}
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-8 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg hidden md:block animate-pulse"></div>
                
                <div className="card-hover bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-2 md:mb-0">{exp.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center">
                      <span className="text-secondary font-medium">{exp.company}</span>
                      <span className="mx-2 text-gray-400 hidden md:inline">|</span>
                      <span className="text-gray-600 font-medium">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 transform hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

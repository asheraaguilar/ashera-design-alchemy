
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PARS: Rural Health Services",
      description: "Progressive web application-based Appointment System for Rural Health Services. Built with React JS, Node.js, Express.js, and MySQL. Features real-time scheduling and management tools.",
      image: "https://readdy.ai/api/search-image?query=modern%20healthcare%20appointment%20scheduling%20system%20interface%20with%20clean%20design%2C%20showing%20calendar%20and%20booking%20features%2C%20medical%20themed%20elements%2C%20professional%20UI%20design%20for%20rural%20health%20services%2C%20minimalist%20and%20accessible%20interface&width=800&height=600&seq=11&orientation=landscape",
      skills: ["React JS", "Node.js", "MySQL", "Express.js", "Axios"],
      isGlassEffect: true
    },
    {
      title: "Lipeño E-Skolar System",
      description: "Comprehensive scholarship management system for Lipa City students, featuring application processing, monitoring, and disbursement tracking.",
      image: "https://readdy.ai/api/search-image?query=education%20management%20system%20dashboard%20with%20modern%20UI%2C%20showing%20student%20profiles%2C%20academic%20records%2C%20and%20scholarship%20management%20features%2C%20professional%20educational%20interface%20design%20with%20blue%20and%20white%20color%20scheme&width=800&height=600&seq=12&orientation=landscape",
      skills: ["Django", "PostgreSQL", "HTML/CSS/JS"]
    },
    {
      title: "Student Conduct Management",
      description: "Web-based system for managing student conduct records, disciplinary actions, and behavioral tracking in educational institutions.",
      image: "https://readdy.ai/api/search-image?query=student%20management%20system%20interface%20showing%20behavior%20tracking%2C%20disciplinary%20records%2C%20and%20reporting%20features%2C%20clean%20professional%20educational%20dashboard%20design%20with%20modern%20UI%20elements&width=800&height=600&seq=13&orientation=landscape",
      skills: ["PHP", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Bus Tracking System",
      description: "Real-time bus tracking and monitoring system developed in Visual Basic, providing location updates and route management.",
      image: "https://readdy.ai/api/search-image?query=bus%20tracking%20system%20interface%20with%20map%20visualization%2C%20real-time%20tracking%20features%2C%20and%20route%20management%2C%20professional%20transportation%20management%20UI%20design&width=800&height=600&seq=14&orientation=landscape",
      skills: ["Visual Basic", "Tracking", "GPS"]
    },
    {
      title: "Lipeños System",
      description: "Comprehensive citizen information management system built with C# and MySQL, designed for efficient data handling and service delivery.",
      image: "https://readdy.ai/api/search-image?query=citizen%20information%20management%20system%20interface%20with%20user%20profiles%2C%20data%20management%20features%2C%20and%20administrative%20dashboard%2C%20clean%20professional%20government%20service%20UI%20design&width=800&height=600&seq=15&orientation=landscape",
      skills: ["C#", "MySQL", "Desktop"]
    },
    {
      title: "AgriLink",
      description: "Agricultural management platform designed in Figma, connecting farmers with resources, markets, and agricultural services.",
      image: "https://readdy.ai/api/search-image?query=agriculture%20management%20platform%20interface%20with%20modern%20design%2C%20showing%20crop%20management%2C%20farmer%20connectivity%2C%20and%20marketplace%20features%2C%20professional%20agricultural%20tech%20UI%20design%20in%20Figma&width=800&height=600&seq=16&orientation=landscape",
      skills: ["Figma", "UX Design", "Agriculture"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`card-hover rounded-2xl overflow-hidden shadow-lg group stagger-child ${
                project.isGlassEffect ? 'glass-effect' : 'bg-white'
              }`}
              style={{ '--stagger-delay': `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className={`p-6 ${project.isGlassEffect ? 'backdrop-blur-sm' : ''}`}>
                <h3 className="text-xl font-bold gradient-text mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        project.isGlassEffect 
                          ? 'glass-effect text-primary' 
                          : 'bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="text-primary font-medium hover:underline flex items-center group transition-all duration-300">
                    <span>View Project</span>
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-primary hover:text-white hover:bg-primary rounded-full border-2 border-primary transition-all duration-300 transform hover:scale-110">
                      <ExternalLink size={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-primary hover:text-white hover:bg-primary rounded-full border-2 border-primary transition-all duration-300 transform hover:scale-110">
                      <Github size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="gradient-bg text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

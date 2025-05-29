
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Electronic Systems Research Center Website",
      description: "Built with React JS, Node.js, Express.js, and MySQL. Features real-time scheduling, appointment and management tools.",
      image: "/lovable-uploads/esrc.png",
      skills: ["HTML","Tailwind CSS"],
      isGlassEffect: true
    },
    {
      title: "PARS: Progressive web application-based Appointment System for Rural Health Services",
      description: "Built with React JS, Node.js, Express.js, and MySQL. Features real-time scheduling, appointment and management tools.",
      image: "/lovable-uploads/pars.png",
      skills: ["React JS", "Node.js", "MySQL", "Express.js", "Axios"],
      isGlassEffect: true
    },
    {
      title: "Lipeño E-Skolar System",
      description: "Comprehensive scholarship management system for Lipa City students, featuring application processing and monitoring with the integration of analytics.",
      image: "/lovable-uploads/lipenoeskolar.png",
      skills: ["Django", "PostgreSQL", "HTML/CSS/JS"]
    },
    {
      title: "The Apex News App",
      description: "Comprehensive scholarship management system for Lipa City students, featuring application processing and monitoring with the integration of analytics.",
      image: "/lovable-uploads/apexnewsapp.png",
      skills: ["Django", "PostgreSQL", "HTML/CSS/JS"]
    },
    {
      title: "Student Conduct Management",
      description: "Web-based system for managing student conduct records, disciplinary actions, and behavioral tracking in educational institutions.",
      image: "/lovable-uploads/StudentConductManagement.png",
      skills: ["PHP", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Trash Track",
      description: "Web-based system for managing student conduct records, disciplinary actions, and behavioral tracking in educational institutions.",
      image: "/lovable-uploads/trashtrack.png",
      skills: ["PHP", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Angat Lipa",
      description: "Web-based system for managing student conduct records, disciplinary actions, and behavioral tracking in educational institutions.",
      image: "/lovable-uploads/angatlipa.png",
      skills: ["PHP", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Snackify Ordering System",
      description: "Web-based system for managing student conduct records, disciplinary actions, and behavioral tracking in educational institutions.",
      image: "/lovable-uploads/snackify.png",
      skills: ["PHP", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Bus Tracking System",
      description: "Real-time bus tracking and monitoring system developed in Visual Basic, providing location updates and route management.",
      image: "bussystem.png",
      skills: ["Visual Basic", "Tracking", "GPS"]
    },
    {
      title: "BeeIS U Store Inventory and Management Dashboard",
      description: "Real-time bus tracking and monitoring system developed in Visual Basic, providing location updates and route management.",
      image: "/lovable-uploads/BeeIsU.png",
      skills: ["Power Bi"]
    },
    {
      title: "Lipeños System",
      description: "Comprehensive citizen information management system built with C# and MySQL, designed for efficient data handling and service delivery.",
      image: "/lovable-uploads/lipeno.png",
      skills: ["C#", "MySQL", "Desktop"]
    },
    {
      title: "AgriLink",
      description: "Agricultural management platform designed in Figma, connecting farmers with resources, markets, and agricultural services.",
      image: "/lovable-uploads/agrilink.png",
      skills: ["Figma"]
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


import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Electronic Systems Research Center Website",
      description: "The ESRC Website serves as the official digital platform for the Electronic Systems Research Center. It provides comprehensive information about the center’s research initiatives, projects, facilities, and academic-industry collaborations in the fields of electronics, semiconductors, embedded systems, and IoT. Designed for researchers, students, and stakeholders, the site offers access to publications, news, upcoming events, and opportunities for innovation and partnership in advancing electronic technologies.",
      image: "/lovable-uploads/esrc.png",
      skills: ["HTML","Tailwind CSS"],
      isGlassEffect: true
    },
    {
      title: "PARS: Progressive web application-based Appointment System for Rural Health Services",
      description: "PARS is a user-friendly Progressive Web Application designed to streamline healthcare appointment scheduling in rural communities. Developed to enhance accessibility and efficiency, PARS enables patients to book, manage, and track appointments with local Rural Health Units (RHUs) anytime, anywhere using their mobile devices. The system reduces wait times, improves service delivery, and promotes better healthcare access through digital innovation tailored for underserved areas.",
      image: "/lovable-uploads/pars.png",
      skills: ["React JS", "Node.js", "MySQL", "Express.js", "Axios"],
      isGlassEffect: true
    },
    {
      title: "Lipeño E-Skolar System",
      description: "A system that will help the applicants of the Educational Benefits Assistance Program of Lipa Batangas to fill-up forms and submit files through the use of modern technology with the integration of business analytics for applying and renewing their educational financial assistance or scholarship",
      image: "/lovable-uploads/lipenoeskolar.png",
      skills: ["Django", "PostgreSQL", "HTML", "CSS", "JS"]
    },
    {
      title: "AgriLink",
      description: "Agricultural management platform designed in Figma, connecting farmers with resources, markets, and agricultural services.",
      image: "/lovable-uploads/agrilink.png",
      skills: ["Figma"]
    },
    {
      title: "The Apex News App",
      description: "The Apex News App is a reliable and efficient app that delivers critical news and creative works, tailored to the specific needs of Batangas State University TNEU - Lipa Campus, enhancing communication within the Red Spartan Community.",
      image: "/lovable-uploads/apexnewsapp.png",
      skills: ["Dart"]
    },
    {
      title: "Student Conduct Management System",
      description: "A information management system for the Office of the Student Discipline that would help track and record student conduct violations, and sanctions acquired by students for the academic year with improved accuracy, reliability, and transparency.",
      image: "/lovable-uploads/StudentConductManagement.png",
      skills: ["PHP", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Trash Track: A Garbage Management Monitoring System",
      description: "A mobile garbage tracking system prototype, which can provide real-time information about waste collection, transportation, and disposal. This application can be used by citizens, the admin of the waste management company, and government agencies to monitor the entire waste management process.",
      image: "/lovable-uploads/trashtrack.png",
      skills: ["Moqups"]
    },
    {
      title: "Angat Lipa",
      description: "A mobile application prototype that aim to address unemployment inequality within the Lipa City by establishing a dedicated online job portal tailored to the unique needs of the city. This platform will serve as a centralized hub connecting job seekers with local employment opportunities, fostering economic growth, and reducing disparities in access to employment.",
      image: "/lovable-uploads/angatlipa.png",
      skills: ["Moqups"]
    },
    {
      title: "Snackify: Order Management System",
      description: "A web-based platform developed for RMJ Merienda and Pasalubong shop. It facilitates the management of snack orders, both pending and past orders, and customer accounts.",
      image: "/lovable-uploads/snackify.png",
      skills: ["PHP", "HTML/CSS", "JavaScript"]
    },
    {
      title: "BeeIS U Store Inventory and Management Dashboard",
      description: "BeeIS U Store is a centralized dashboard system designed to simplify and automate inventory and store management processes. It provides real-time tracking of stock levels, sales, and transactions, helping store operators make data-driven decisions. With an intuitive interface and efficient reporting tools, BeeIS ensures better control over inventory, reduces manual errors, and enhances overall operational efficiency for small to medium-sized retail businesses.",
      image: "/lovable-uploads/BeeIsU.png",
      skills: ["Power Bi"]
    },
    {
      title: "Lipeños System",
      description: "A System that will help the applicants of the Educational Benefit Assistance Program of Lipa City Batangas to fill up forms and submit files through the use of modern technology for applying and renewing their educational financial assistance or scholarship.",
      image: "/lovable-uploads/lipeno.png",
      skills: ["C#", "MySQL", "Desktop"]
    },
    {
      title: "SM Terminal Bus Booking Management System",
      description: "A streamlined digital platform designed to manage and automate the reservation, ticketing, and scheduling processes of bus terminals. It enables passengers to book trips efficiently while allowing terminal staff to monitor bus availability, manage routes, and generate reports in real-time. With its user-friendly interface and reliable database, the system enhances travel convenience, reduces congestion at ticket counters, and improves overall operational efficiency.",
      image: "/lovable-uploads/bussystem.png",
      skills: ["Visual Basic"]
    },
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


import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "BITCON 2025: Building a Connected Tomorrow: IoT Innovations and Beyond",
      issuer: "Technology Conference",
      date: "April 26, 2025",
      description: "Advanced conference on Internet of Things innovations and future technology trends.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
      credentialId: "BITCON-2025-001",
      verifyUrl: "#"
    },
    {
      title: "Web Development Training",
      issuer: "Professional Development",
      date: "March 24, 2025",
      description: "Comprehensive training in modern web development technologies and best practices.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center",
      credentialId: "WEB-DEV-2025",
      verifyUrl: "#"
    },
    {
      title: "LaTeX Training",
      issuer: "Technical Documentation",
      date: "March 4, 2025",
      description: "Professional training in LaTeX for scientific and technical document preparation.",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop&crop=center",
      credentialId: "LATEX-2025",
      verifyUrl: "#"
    },
    {
      title: "Arduino Training",
      issuer: "Electronics Development",
      date: "February 11, 2025",
      description: "Hands-on training in Arduino programming and hardware prototyping.",
      image: "https://images.unsplash.com/photo-1553808444-e3c8e7cfd6b0?w=400&h=300&fit=crop&crop=center",
      credentialId: "ARDUINO-2025",
      verifyUrl: "#"
    },
    {
      title: "Easy EDA Training",
      issuer: "Circuit Design",
      date: "February 3, 2025",
      description: "Training in electronic design automation using Easy EDA software.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop&crop=center",
      credentialId: "EDA-2025",
      verifyUrl: "#"
    },
    {
      title: "DATABIZ CONFERENCE 2024: Data Science, Artificial Intelligence and Business Analytics",
      issuer: "Data Analytics Conference",
      date: "November 9, 2024",
      description: "Conference focusing on data science applications in business and AI innovations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      credentialId: "DATABIZ-2024",
      verifyUrl: "#"
    },
    {
      title: "Data Analysis and Visualization Using Excel",
      issuer: "Microsoft Excel Training",
      date: "June 19, 2024",
      description: "Advanced Excel techniques for data analysis and creating impactful visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      credentialId: "EXCEL-VIZ-2024",
      verifyUrl: "#"
    },
    {
      title: "eGOVPh Super App Orientation",
      issuer: "Government Technology",
      date: "May 10, 2024",
      description: "Orientation on Philippine government's digital transformation initiatives.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center",
      credentialId: "EGOVPH-2024",
      verifyUrl: "#"
    },
    {
      title: "BITCON 2024: Navigating the Future of Technology: Integration, Innovation and Security",
      issuer: "Technology Conference",
      date: "April 6, 2024",
      description: "Conference on emerging technologies, system integration, and cybersecurity.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
      credentialId: "BITCON-2024",
      verifyUrl: "#"
    },
    {
      title: "TechSynergy: Navigating the Digital Landscape 2023 - Connecting Concepts, Bridging Technologies",
      issuer: "Tech Innovation Summit",
      date: "December 4, 2023",
      description: "Summit on digital transformation and technology convergence.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
      credentialId: "TECHSYNERGY-2023",
      verifyUrl: "#"
    },
    {
      title: "Odyssey 2.0: Diving Deeper to Leadership",
      issuer: "Leadership Development",
      date: "September 17, 2023",
      description: "Leadership development program focusing on management and team building skills.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
      credentialId: "ODYSSEY-2023",
      verifyUrl: "#"
    },
    {
      title: "Unleashing the Power of Data: A Webinar Series on the Art and Science of Data",
      issuer: "Data Science Institute",
      date: "May 19, 2023",
      description: "Comprehensive webinar series covering data analytics and data science methodologies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      credentialId: "DATA-POWER-2023",
      verifyUrl: "#"
    },
    {
      title: "Huawei ICT Academy: How to Get Certified?",
      issuer: "Huawei Technologies",
      date: "March 26, 2022",
      description: "Information and communication technology certification guidance from Huawei Academy.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      credentialId: "HUAWEI-ICT-2022",
      verifyUrl: "#"
    },
    {
      title: "Campus Journalism Seminar-Workshop",
      issuer: "Journalism Institute",
      date: "July 26, 2019",
      description: "Workshop on campus journalism, writing techniques, and media ethics.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop&crop=center",
      credentialId: "JOURNALISM-2019",
      verifyUrl: "#"
    },
    {
      title: "Division Orientation Training on Robotics Technology",
      issuer: "Robotics Division",
      date: "January 31, 2018",
      description: "Foundational training in robotics technology and automation systems.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center",
      credentialId: "ROBOTICS-2018",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through industry conferences, workshops, and training programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group stagger-child"
              style={{ '--stagger-delay': `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Award size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Calendar size={14} className="mr-1" />
                    <span className="text-sm font-medium">{cert.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-secondary font-medium mb-3">{cert.issuer}</p>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                      <p className="text-sm font-mono text-gray-700">{cert.credentialId}</p>
                    </div>
                    <button className="w-10 h-10 flex items-center justify-center text-primary hover:text-white hover:bg-primary rounded-xl border-2 border-primary transition-all duration-300 transform hover:scale-110 group-hover:animate-glow">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-medium">Committed to continuous learning and professional growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;


import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional-level certification demonstrating expertise in designing distributed applications on AWS.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      credentialId: "AWS-PSA-12345",
      verifyUrl: "#"
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "2022",
      description: "Comprehensive program covering user experience design process, from empathizing with users to testing designs.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center",
      credentialId: "GOOGLE-UX-67890",
      verifyUrl: "#"
    },
    {
      title: "Meta React Developer Professional Certificate",
      issuer: "Meta",
      date: "2022",
      description: "Specialized training in React development, including advanced concepts and best practices.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center",
      credentialId: "META-REACT-11111",
      verifyUrl: "#"
    },
    {
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "2021",
      description: "Certification in Agile project management and Scrum methodology for leading development teams.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
      credentialId: "CSM-22222",
      verifyUrl: "#"
    },
    {
      title: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "2021",
      description: "Comprehensive training in MongoDB database design, development, and administration.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
      credentialId: "MONGO-DEV-33333",
      verifyUrl: "#"
    },
    {
      title: "Figma Design Certification",
      issuer: "Figma Academy",
      date: "2020",
      description: "Advanced certification in Figma for professional UI/UX design and prototyping.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop&crop=center",
      credentialId: "FIGMA-CERT-44444",
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
            Continuous learning and professional development through industry-recognized certifications
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
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:gradient-text transition-all duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-secondary font-medium mb-3">{cert.issuer}</p>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
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
            <span className="text-primary font-medium">More certifications in progress</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

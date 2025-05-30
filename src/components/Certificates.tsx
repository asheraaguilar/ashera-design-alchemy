
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "BITCON 2025: Building a Connected Tomorrow: IoT Innovations and Beyond",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Web Development Training",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "LaTeX Training",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Arduino Training",
      image: "https://images.unsplash.com/photo-1553808444-e3c8e7cfd6b0?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Easy EDA Training",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "DATABIZ CONFERENCE 2024: Data Science, Artificial Intelligence and Business Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Data Analysis and Visualization Using Excel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "eGOVPh Super App Orientation",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "BITCON 2024: Navigating the Future of Technology: Integration, Innovation and Security",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "TechSynergy: Navigating the Digital Landscape 2023",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Odyssey 2.0: Diving Deeper to Leadership",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Unleashing the Power of Data: A Webinar Series",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Huawei ICT Academy: How to Get Certified?",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Campus Journalism Seminar-Workshop",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Division Orientation Training on Robotics Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center"
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
            A collection of certificates from conferences, workshops, and training programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group stagger-child"
              style={{ '--stagger-delay': `${index * 50}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {cert.title}
                  </h3>
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

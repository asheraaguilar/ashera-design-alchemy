
import { Award } from 'lucide-react';
import { useState } from 'react';

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const getCardClass = (index: number) => {
    if (index === currentIndex) {
      return 'card--current';
    }
    if (index === (currentIndex + 1) % certificates.length) {
      return 'card--next';
    }
    if (index < currentIndex) {
      return 'card--out';
    }
    return '';
  };

  return (
    <section id="certificates" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Certificates & Achievements
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A collection of certificates from conferences, workshops, and training programs
          </p>
        </div>
        
        <div className="relative max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="cards cards--active relative h-64 sm:h-80 md:h-96 perspective-1000">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`card ${getCardClass(index)} absolute inset-0 cursor-pointer transition-all duration-500 ease-in-out transform-gpu`}
                onClick={() => handleCardClick(index)}
                style={{
                  zIndex: index === currentIndex ? 10 : certificates.length - Math.abs(index - currentIndex),
                  transform: index === currentIndex 
                    ? 'translateX(0) translateY(0) scale(1)' 
                    : index === (currentIndex + 1) % certificates.length
                    ? 'translateX(10px) translateY(10px) scale(0.95) sm:translateX(15px) sm:translateY(15px) md:translateX(20px) md:translateY(20px)'
                    : index < currentIndex
                    ? 'translateX(-50px) translateY(-10px) scale(0.9) rotateY(-10deg) sm:translateX(-75px) sm:translateY(-15px) md:translateX(-100px) md:translateY(-20px) md:rotateY(-15deg)'
                    : 'translateX(20px) translateY(20px) scale(0.9) sm:translateX(30px) sm:translateY(30px) md:translateX(40px) md:translateY(40px)'
                }}
              >
                <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl h-full">
                  <div className="relative h-2/3 md:h-3/4 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 h-1/3 md:h-1/4 flex items-center justify-center">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center line-clamp-2 text-gray-800">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2" />
            <span className="text-primary font-medium text-sm md:text-base">Committed to continuous learning and professional growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

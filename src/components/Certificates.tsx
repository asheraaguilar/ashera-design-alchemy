
import { Award } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Certificates = () => {
  const certificates = [
    {
      title: "Cetificate of Completion (Internship)",
      image: "/lovable-uploads/OJT.jpg"
    },
    {
      title: "BITCON 2025: Building a Connected Tomorrow: IoT Innovations and Beyond",
      image: "/lovable-uploads/Bitcon1.jpg"
    },
    {
      title: "Web Development Training",
      image: "/lovable-uploads/WebDev.jpg"
    },
    {
      title: "PCB Design and Fabrication Training",
      image: "/lovable-uploads/PCB.jpg"
    },
    {
      title: "LaTeX Training",
      image: "/lovable-uploads/LaTex.jpg"
    },
    {
      title: "Drone Training",
      image: "/lovable-uploads/Drone.jpg"
    },
    {
      title: "Arduino Training",
      image: "/lovable-uploads/Arduino.jpg"
    },
    {
      title: "Easy EDA Training",
      image: "/lovable-uploads/EasyEDA.jpg"
    },
    {
      title: "DATABIZ CONFERENCE 2024: Data Science, Artificial Intelligence and Business Analytics",
      image: "/lovable-uploads/DataBiz.jpg"
    },
    {
      title: "Service Awardee as Chief Creatice Media Officer of Tech Innovators Society",
      image: "/lovable-uploads/ServiceAward.jpg"
    },
    {
      title: "Chief Creative Media Officer TechIS Service Award",
      image: "/lovable-uploads/TechIS.jpg"
    },
    {
      title: "Annex Journos, the Volunteer Writers of Extension Services Office of BatStateU Participation",
      image: "/lovable-uploads/AnnexJournos.jpg"
    },
    {
      title: "Chief Creative Media Officer of Tech Innovators Society A.Y. 2023-2024",
      image: "/lovable-uploads/CCMO.png"
    },
    {
      title: "Techno SDG Exposition: Bridging Insights and Innovation",
      image: "/lovable-uploads/techexpo.jpg"
    },
    {
      title: "BITCON 2024: Navigating the Future of Technology: Integration, Innovation, and Security",
      image: "/lovable-uploads/Bitcon1.jpg"
    },
    {
      title: "COMLITS: Empowering Learners through Computer Literacy in Public Schools Participation",
      image: "/lovable-uploads/Comlits.jpg"
    },
    {
      title: "ScratchLogic: Unravelling the Secrets of Programming Participation",
      image: "/lovable-uploads/ScratchLogic.jpg"
    },
    {
      title: "Inside Out: Pioneering a Fresh Chapter Participation",
      image: "/lovable-uploads/InsideOut.png"
    },
    {
      title: "Dean's Lister 2nd Semester AY 2021-2022 Recognition",
      image: "/lovable-uploads/DL2ndSem21-22.png"
    },
    {
      title: "Dean's Lister 2nd Semester AY 2022-2023 Recognition",
      image: "/lovable-uploads/DL2ndSem22-23.jpg"
    },
    {
      title: "Dean's Lister 2nd Semester AY 2023-2024 Recognition",
      image: "/lovable-uploads/DeansLister2ndSem23-24.jpg"
    },
    {
      title: "Fundamentals of Analytics Modelling Top 5 Recognition",
      image: "/lovable-uploads/FAM.png"
    },
    {
      title: "Data Analysis and Visualization Using Excel",
      image: "/lovable-uploads/DICT1.png"
    },
    {
      title: "eGOVPh Super App Orientation",
      image: "/lovable-uploads/DICT2.png"
    },
    {
      title: "BITCON 2024: Navigating the Future of Technology: Integration, Innovation and Security",
      image: "/lovable-uploads/Bitcon1.jpg"
    },
    {
      title: "TechSynergy: Navigating the Digital Landscape 2023 - Connecting Concepts, Bridging Technologies",
      image: "/lovable-uploads/TechSynergy.jpg"
    },
    {
      title: "Techno SDG Exposition: Bridging Insights and Innovation UI/UX SDG Challenge 3rd Place Awardee",
      image: "/lovable-uploads/TechnoAwardee.jpg"
    },
    {
      title: "Tech for Good: Collaborative Challenge in SDGs 1st Place Recognition",
      image: "/lovable-uploads/TechforGood1st.png"
    },
    {
      title: "Tech for Good: Collaborative Challenge in SDGs Participation ",
      image: "/lovable-uploads/TechforGoodPart.png"
    },
    {
      title: "Tech for Good: Collaborative Challenge in SDGs Participation as Public Relations Officer",
      image: "/lovable-uploads/TechforGoodService.png"
    },
    {
      title: "Odyssey 2.0: Diving Deeper to Leadership",
      image: "/lovable-uploads/Odyssey.jpg"
    },
    {
      title: "Alliance of Computing Sciences Students | Public Relations Officer 2nd Semester A.Y. 2022-2023",
      image: "/lovable-uploads/PRO.png"
    },
    {
      title: "Alliance of Computing Sciences Students | Graphic Designer 1st Semester A.Y. 2022-2023",
      image: "/lovable-uploads/GraphicDesigner.png"
    },
    {
      title: "Division Orientation Training on Robotics Technology",
      image: "/lovable-uploads/Robotics.jpg"
    }
  ];

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
        
        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="certificate-card h-full">
                    <CardContent className="p-0 h-full">
                      <div className="relative h-64 md:h-72 overflow-hidden rounded-t-lg">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                      <div className="p-4 md:p-6">
                        <h3 className="text-sm md:text-base font-semibold text-center line-clamp-3 text-gray-800 min-h-[3rem] flex items-center justify-center">
                          {cert.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4" />
            <CarouselNext className="hidden sm:flex -right-4" />
          </Carousel>
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

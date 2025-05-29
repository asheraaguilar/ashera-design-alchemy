
import { Code, Palette, Users, CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        "JavaScript/TypeScript",
        "React & React Native", 
        "Node.js & Express",
        "HTML5/CSS3/SASS",
        "SQL & NoSQL Databases",
        "RESTful & GraphQL APIs"
      ]
    },
    {
      title: "Design Skills", 
      icon: Palette,
      skills: [
        "User Experience (UX) Design",
        "User Interface (UI) Design",
        "Wireframing & Prototyping",
        "Figma & Adobe XD",
        "Responsive Web Design",
        "Design Systems"
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Project Management",
        "Team Leadership",
        "Problem Solving", 
        "Client Communication",
        "Time Management",
        "Agile Methodologies"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-hover bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 group stagger-child"
              style={{ '--stagger-delay': `${index * 200}ms` } as React.CSSProperties}
            >
              <div className="w-16 h-16 flex items-center justify-center text-white mb-6 rounded-2xl gradient-bg group-hover:scale-110 transition-transform duration-300 glow-on-hover">
                <category.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-6 group-hover:gradient-text transition-all duration-300">
                {category.title}
              </h3>
              
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center group/skill"
                    style={{ '--stagger-delay': `${(index * 200) + (skillIndex * 50)}ms` } as React.CSSProperties}
                  >
                    <div className="w-6 h-6 flex items-center justify-center text-primary mr-3 group-hover/skill:text-white group-hover/skill:bg-primary rounded-full transition-all duration-300">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 group-hover/skill:text-primary transition-colors duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

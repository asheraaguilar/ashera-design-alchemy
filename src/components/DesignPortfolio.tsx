import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileImage, FileText, Shirt, Newspaper, Image } from 'lucide-react';

const DesignPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const designCategories = [
    { id: 'all', label: 'All Work', icon: Image },
    { id: 'pubmats', label: 'Pubmats', icon: FileImage },
    { id: 'newspaper', label: 'Newspaper', icon: Newspaper },
    { id: 'shirts', label: 'Shirt Designs', icon: Shirt }
  ];

  // Placeholder data - you can replace with actual design images
  const designWorks = [
    {
      id: 1,
      title: 'Event Promotion Pubmat',
      category: 'pubmats',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      description: 'Modern event promotion design for college activities'
    },
    {
      id: 2,
      title: 'Newsletter Layout Design',
      category: 'newspaper',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop',
      description: 'Clean and professional newsletter layout'
    },
    {
      id: 3,
      title: 'Custom T-Shirt Design',
      category: 'shirts',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
      description: 'Creative t-shirt design for student organization'
    },
    {
      id: 4,
      title: 'Academic Poster',
      category: 'pubmats',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop',
      description: 'Academic conference poster design'
    },
    {
      id: 5,
      title: 'Campus News Layout',
      category: 'newspaper',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=300&fit=crop',
      description: 'University newspaper front page layout'
    },
    {
      id: 6,
      title: 'Sports Team Jersey',
      category: 'shirts',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop',
      description: 'Sports team jersey design with modern aesthetics'
    }
  ];

  const filteredWorks = selectedCategory === 'all' 
    ? designWorks 
    : designWorks.filter(work => work.category === selectedCategory);

  return (
    <section id="design-portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Design Portfolio
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore my creative work in graphic design, including promotional materials, 
            newspaper layouts, and custom apparel designs
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            {designCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2"
              >
                <category.icon size={16} />
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorks.map((work, index) => (
                <Card 
                  key={work.id} 
                  className="card-hover overflow-hidden group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-semibold text-lg mb-2">{work.title}</h3>
                        <p className="text-sm text-white/90">{work.description}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{work.title}</h3>
                    <p className="text-gray-600 mb-4">{work.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full capitalize">
                        {work.category}
                      </span>
                      <button className="text-secondary hover:text-primary transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredWorks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No designs found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DesignPortfolio;

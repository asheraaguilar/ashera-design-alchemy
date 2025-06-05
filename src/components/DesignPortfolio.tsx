
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { FileImage, Shirt, Newspaper, Image, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DesignPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const designCategories = [
    { id: 'all', label: 'All Work', icon: Image },
    { id: 'pubmats', label: 'Pubmats', icon: FileImage },
    { id: 'newspaper', label: 'Newspaper', icon: Newspaper },
    { id: 'shirts', label: 'Shirt Designs', icon: Shirt }
  ];

  const designWorks = [
    {
      id: 1,
      title: 'Event Promotion Pubmat',
      category: 'pubmats',
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=600&fit=crop'
      ],
      description: 'Modern event promotion design for college activities',
      height: 'tall'
    },
    {
      id: 2,
      title: 'Newsletter Layout Design',
      category: 'newspaper',
      images: [
        'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=300&fit=crop'
      ],
      description: 'Clean and professional newsletter layout',
      height: 'medium'
    },
    {
      id: 3,
      title: 'Custom T-Shirt Design',
      category: 'shirts',
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=500&fit=crop'
      ],
      description: 'Creative t-shirt design for student organization',
      height: 'tall'
    },
    {
      id: 4,
      title: 'Academic Poster',
      category: 'pubmats',
      images: [
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=350&fit=crop',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=350&fit=crop',
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=350&fit=crop'
      ],
      description: 'Academic conference poster design',
      height: 'medium'
    },
    {
      id: 5,
      title: 'Campus News Layout',
      category: 'newspaper',
      images: [
        'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=450&fit=crop',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=450&fit=crop'
      ],
      description: 'University newspaper front page layout',
      height: 'medium'
    },
    {
      id: 6,
      title: 'Sports Team Jersey',
      category: 'shirts',
      images: [
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=550&fit=crop',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=550&fit=crop'
      ],
      description: 'Sports team jersey design with modern aesthetics',
      height: 'tall'
    },
    {
      id: 7,
      title: 'Brand Identity Poster',
      category: 'pubmats',
      images: [
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=320&fit=crop'
      ],
      description: 'Brand identity poster with modern typography',
      height: 'short'
    },
    {
      id: 8,
      title: 'Magazine Spread',
      category: 'newspaper',
      images: [
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=280&fit=crop',
        'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=280&fit=crop'
      ],
      description: 'Editorial magazine spread design',
      height: 'short'
    }
  ];

  const filteredWorks =
    selectedCategory === 'all'
      ? designWorks
      : designWorks.filter((work) => work.category === selectedCategory);

  const handleItemClick = (work: any) => {
    setSelectedWork(work);
    setSelectedImageIndex(0);
    setIsModalOpen(true);
  };

  const handlePrevImage = () => {
    if (selectedWork) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedWork.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedWork) {
      setSelectedImageIndex((prev) => 
        prev === selectedWork.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const getCardHeight = (height: string) => {
    switch (height) {
      case 'short': return 'h-48';
      case 'medium': return 'h-64';
      case 'tall': return 'h-80';
      default: return 'h-64';
    }
  };

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
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                <category.icon size={16} />
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            {/* Pinterest-style Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredWorks.map((work) => (
                <div
                  key={work.id}
                  className="break-inside-avoid cursor-pointer"
                  onClick={() => handleItemClick(work)}
                >
                  <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white">
                    <div className="relative overflow-hidden">
                      <img
                        src={work.images[0]}
                        alt={work.title}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${getCardHeight(work.height)}`}
                      />
                      {work.images.length > 1 && (
                        <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                          +{work.images.length - 1}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-semibold text-lg mb-2">{work.title}</h3>
                          <p className="text-sm text-white/90">{work.description}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-primary mb-2">{work.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{work.description}</p>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full capitalize">
                        {work.category}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Instagram-style Image Viewer Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black">
            <DialogTitle className="sr-only">
              {selectedWork?.title || 'Design Image'}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {selectedWork?.description || 'Design portfolio image viewer'}
            </DialogDescription>
            
            <div className="relative h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={20} />
              </Button>

              {selectedWork && (
                <div className="relative h-[80vh] flex items-center justify-center">
                  <img
                    src={selectedWork.images[selectedImageIndex]}
                    alt={`${selectedWork.title} - Image ${selectedImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />

                  {/* Navigation arrows */}
                  {selectedWork.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full"
                        onClick={handlePrevImage}
                      >
                        <ChevronLeft size={24} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full"
                        onClick={handleNextImage}
                      >
                        <ChevronRight size={24} />
                      </Button>
                    </>
                  )}

                  {/* Image indicators */}
                  {selectedWork.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedWork.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === selectedImageIndex 
                              ? 'bg-white' 
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          onClick={() => setSelectedImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Image info */}
              {selectedWork && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{selectedWork.title}</h3>
                  <p className="text-white/90 mb-2">{selectedWork.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm capitalize">
                      {selectedWork.category}
                    </span>
                    {selectedWork.images.length > 1 && (
                      <span className="text-sm text-white/75">
                        {selectedImageIndex + 1} of {selectedWork.images.length}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

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

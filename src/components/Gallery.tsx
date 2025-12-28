import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { url: new URL("../../images/Science Lab.JPG", import.meta.url).href, alt: "Science Lab" },
    { url: new URL("../../images/phy lab.JPG", import.meta.url).href, alt: "Physics Lab" },
    { url: new URL("../../images/bio lab.JPG", import.meta.url).href, alt: "Biology Lab" },
    { url: new URL("../../images/ground.JPG", import.meta.url).href, alt: "Playground" },
    { url: new URL("../../images/arial photo.JPG", import.meta.url).href, alt: "Campus Aerial" },
    { url: new URL("../../images/DSCN6015.JPG", import.meta.url).href, alt: "Library" },
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-school-gold/10 text-school-gold-dark rounded-full text-sm font-semibold mb-4">
            Campus Life
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Campus Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a glimpse into our vibrant campus life and the various activities that make Crescent School special.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-school-green-light transition-colors"
          >
            View Full Gallery
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-primary-foreground hover:text-school-gold transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-primary-foreground hover:text-school-gold transition-colors"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div className="max-w-4xl max-h-[80vh]">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 text-primary-foreground hover:text-school-gold transition-colors"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;

import { Monitor, Beaker, BookOpen, Shield, Wifi, Trophy } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Monitor,
      title: "Smart Classrooms",
      description: "Digital learning with interactive boards and modern teaching aids",
    },
    {
      icon: Beaker,
      title: "Science Laboratory",
      description: "Well-equipped labs for physics, chemistry, and biology practicals",
    },
    {
      icon: Monitor,
      title: "Computer Lab",
      description: "Modern computer lab with high-speed internet connectivity",
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "Extensive collection of books, magazines, and digital resources",
    },
    {
      icon: Trophy,
      title: "Sports Facilities",
      description: "Playground with facilities for cricket, football, and indoor games",
    },
    {
      icon: Shield,
      title: "CCTV Surveillance",
      description: "24/7 CCTV monitoring for complete campus security",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-school-gold/10 text-school-gold-dark rounded-full text-sm font-semibold mb-4">
            Our Infrastructure
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Facilities
          </h2>
          <p className="text-muted-foreground text-lg">
            State-of-the-art infrastructure designed to provide the best learning environment for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className="group relative bg-card rounded-xl p-6 border border-border overflow-hidden hover:border-school-gold/50 transition-all duration-300"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-school-gold/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:bg-school-gold/20 transition-colors">
                  <facility.icon className="h-7 w-7 text-primary group-hover:text-school-gold transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;

import { BookOpen, Users, Target, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum designed to foster academic excellence and critical thinking.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Dedicated teachers with years of experience in nurturing young minds.",
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Focus on overall personality development including sports, arts, and co-curricular activities.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Consistently outstanding results with students excelling in academics and beyond.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-school-gold/10 text-school-gold-dark rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Our School
          </h2>
          <p className="text-muted-foreground text-lg">
            Founded with a vision to provide quality education rooted in Islamic values, Crescent School has been a beacon of excellence in education for over two decades.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={new URL("../../images/main first image campus veiw .JPG", import.meta.url).href}
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-school-gold/20 rounded-full flex items-center justify-center">
                  <Award className="h-7 w-7 text-school-gold" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-foreground">A+ Rated</div>
                  <div className="text-sm text-muted-foreground">School Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Nurturing Future Leaders Since 2008
            </h3>
            <p className="text-muted-foreground">
              Crescent School follows the Gujarat Secondary and Higher Secondary Education Board (GSEB) curriculum, ensuring strong academic foundations aligned with state education standards. The school emphasizes conceptual learning, discipline, and overall student development, preparing learners for academic excellence and future opportunities through a balanced and structured approach.
            </p>
            <p className="text-muted-foreground">
              We believe in the holistic development of each child, focusing not just on academics but also on character building, moral values, and life skills that prepare them for the challenges of tomorrow.
            </p>
            <ul className="space-y-3">
              {["State-of-the-art infrastructure", "Focus on both academics and moral values", "Regular parent-teacher interactions", "Safe and nurturing environment"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-school-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-school-gold/50 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-school-gold/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-school-gold transition-colors" />
              </div>
              <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

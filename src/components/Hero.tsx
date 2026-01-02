import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [admText, setAdmText] = useState("Admissions Open 2025-26");

  useEffect(() => {
    const url = "https://ool-site-updates-default-rtdb.firebaseio.com/admissions_text.json";
    fetch(url)
      .then((r) => (r.ok ? r.json() : null))
      .then((txt) => {
        if (typeof txt === "string" && txt.trim().length) {
          setAdmText(txt);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-school-gold rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-school-gold-light rounded-full blur-3xl animate-float animation-delay-300" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            fill="currentColor"
            className="text-school-gold"
            d="M37.5,-51.4C48.9,-42.8,58.5,-31.8,63.2,-18.6C67.9,-5.4,67.6,10,61.8,22.7C55.9,35.4,44.5,45.4,31.8,52.9C19.1,60.4,5.1,65.4,-9.6,65.3C-24.2,65.2,-39.5,60,-50.2,50.1C-60.9,40.2,-67,25.6,-68.4,10.5C-69.8,-4.6,-66.5,-20.2,-58.4,-32.4C-50.3,-44.6,-37.4,-53.4,-24.1,-61.1C-10.8,-68.8,3,-75.5,16.5,-73.8C30,-72.1,43.1,-62,48.9,-51.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-school-gold/20 rounded-full text-school-gold mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-school-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium">{admText}</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Learning rooted in{" "}
            <span className="text-gradient-gold">values</span>, striving for{" "}
            <span className="text-gradient-gold">excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            At Crescent School, we nurture young minds with a blend of traditional values and modern education, preparing students to excel in all walks of life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="#about"
              className="px-8 py-4 bg-school-gold text-school-green-dark font-bold rounded-lg hover:bg-school-gold-light transition-all duration-300 shadow-gold hover:shadow-xl hover:-translate-y-1"
            >
              Explore Our School
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Apply for Admission
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up animation-delay-400">
            {[
              { value: "3000+", label: "Students Enrolled" },
              { value: "100+", label: "Expert Teachers" },
              { value: "2008", label: "Established" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-school-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-school-gold transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;

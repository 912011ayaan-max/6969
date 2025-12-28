import { Facebook, Instagram, Twitter, Youtube, ChevronUp } from "lucide-react";
const logoSrc = new URL("../../CS_Logo[1].png", import.meta.url).href;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Academic Programs", href: "#programs" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Fee Structure", href: "#fees" },
    { name: "Contact Us", href: "#contact" },
  ];

  const programs = [
    "Pre-Primary (Nursery - KG)",
    "Primary (Class 1-5)",
    "Middle School (Class 6-8)",
    "Secondary (Class 9-10)",
    "Islamic Studies",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoSrc} alt="Crescent School" className="h-14 w-auto bg-primary-foreground/10 rounded-lg p-1" />
              <div>
                <h3 className="font-heading text-xl font-bold">Crescent School</h3>
                <p className="text-xs text-primary-foreground/70">Excellence • Character • Faith</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Affiliated to GSEB — English & Gujarati Medium. Morning & Noon shifts. Separate Girls’ Section.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-school-gold hover:text-school-green-dark transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-school-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-primary-foreground/80 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li>
                <strong className="text-primary-foreground">Address:</strong>
                <br />
                Sarkhej Rd, Near Shahin Tiles Factory
                <br />
                Behind Amber Tower, Al Asbab Society
                <br />
                Makarba, Ahmedabad, Gujarat 380055
              </li>
              <li>
                <strong className="text-primary-foreground">Phone:</strong>
                <br />
                +91 9824266676
              </li>
              <li>
                <strong className="text-primary-foreground">Email:</strong>
                <br />
                crescentschoolhd@yahoo.co.in
              </li>
              <li>
                <strong className="text-primary-foreground">Office Hours:</strong>
                <br />
                Mon–Sat: 9:00–1:00 & 2:00–5:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60 text-center sm:text-left">
              © {new Date().getFullYear()} Crescent School. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-school-gold text-school-green-dark rounded-full flex items-center justify-center hover:bg-school-gold-light transition-colors"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

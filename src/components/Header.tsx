import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
const logoSrc = new URL("../../CS_Logo[1].png", import.meta.url).href;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Fees", href: "#fees" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:+919824266676" className="flex items-center gap-2 hover:text-school-gold transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 9824266676</span>
            </a>
            <a href="mailto:crescentschoolhd@yahoo.co.in" className="flex items-center gap-2 hover:text-school-gold transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>crescentschoolhd@yahoo.co.in</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>Sarkhej Rd, Makarba, Ahmedabad 380055</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card/95 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img src={logoSrc} alt="Crescent School" className="h-14 w-auto bg-primary-foreground/10 rounded-lg p-1" />
              <div className="hidden sm:block">
                <h1 className="font-heading text-xl font-bold text-primary">Crescent School</h1>
                <p className="text-xs text-muted-foreground">Excellence • Character • Faith</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-school-gold group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-school-green-light transition-colors shadow-soft"
              >
                Admissions Open
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in-up">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg text-center font-semibold mt-4"
              >
                Admissions Open
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

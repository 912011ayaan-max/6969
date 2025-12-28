import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Sarkhej Rd, Near Shahin Tiles Factory",
        "Behind Amber Tower, Al Asbab Society",
        "Makarba, Ahmedabad, Gujarat 380055",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9824266676"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["crescentschoolhd@yahoo.co.in"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon–Sat: 9:00–1:00 & 2:00–5:00", "Sunday: Closed"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-school-gold/10 text-school-gold-dark rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions about admissions? Visit or call during office hours. We’re happy to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card rounded-xl border border-border p-5 hover:border-school-gold/30 hover:shadow-soft transition-all"
                >
                  <div className="w-10 h-10 bg-school-gold/20 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-5 w-5 text-school-gold" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-card rounded-xl border border-border overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.909760231131!2d72.5120415!3d22.990345599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9a941804c797%3A0xf0b59df21c8a4d43!2sCrescent%20School!5e0!3m2!1sen!2sin!4v1758253005401!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

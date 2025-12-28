import { Check } from "lucide-react";

const Fees = () => {
  const feeStructure = [
    {
      category: "Pre-Primary",
      grades: "Nursery, Jr. KG, Sr. KG",
      tuitionFee: "₹15,000",
      admissionFee: "₹5,000",
      features: ["Activity-based learning", "Play equipment", "Art supplies", "Annual events"],
      popular: false,
    },
    {
      category: "Primary",
      grades: "Class 1 to Class 5",
      tuitionFee: "₹20,000",
      admissionFee: "₹7,500",
      features: ["Complete curriculum", "Sports activities", "Computer classes", "Library access", "Smart classroom"],
      popular: true,
    },
    {
      category: "Secondary",
      grades: "Class 6 to Class 10",
      tuitionFee: "₹25,000",
      admissionFee: "₹10,000",
      features: ["Board preparation", "Lab practicals", "Career counseling", "Extra coaching", "Study materials"],
      popular: false,
    },
  ];

  return (
    <section id="fees" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-school-gold/10 text-school-gold-dark rounded-full text-sm font-semibold mb-4">
            Affordable Education
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fees Structure
          </h2>
          <p className="text-muted-foreground text-lg">
            Quality education at affordable fees. We believe in making excellent education accessible to all families.
          </p>
        </div>

        {/* Fee Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {feeStructure.map((fee) => (
            <div
              key={fee.category}
              className={`relative bg-card rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                fee.popular ? "border-school-gold shadow-gold" : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {fee.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-school-gold text-school-green-dark text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                    {fee.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">{fee.grades}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6 pb-6 border-b border-border">
                  <div className="text-4xl font-heading font-bold text-primary mb-1">
                    {fee.tuitionFee}
                  </div>
                  <p className="text-sm text-muted-foreground">per year (tuition fee)</p>
                  <div className="mt-3 text-sm">
                    <span className="text-muted-foreground">Admission Fee: </span>
                    <span className="font-semibold text-foreground">{fee.admissionFee}</span>
                    <span className="text-muted-foreground"> (one-time)</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {fee.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-5 h-5 bg-school-gold/20 rounded-full flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-school-gold" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    fee.popular
                      ? "bg-school-gold text-school-green-dark hover:bg-school-gold-light"
                      : "bg-primary text-primary-foreground hover:bg-school-green-light"
                  }`}
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-6 border border-border">
            <h4 className="font-heading text-lg font-bold text-foreground mb-4">Additional Information</h4>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-school-gold">•</span>
                Fees can be paid in 2 installments (April & October)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-school-gold">•</span>
                Sibling discount of 10% available
              </li>
              <li className="flex items-start gap-2">
                <span className="text-school-gold">•</span>
                Transport fees extra (as per distance)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-school-gold">•</span>
                Uniform and books charged separately
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;

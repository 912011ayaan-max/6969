import { GraduationCap, Baby, BookMarked, Calculator, Languages, FlaskConical } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: "Pre-Primary (Nursery & KG)",
      grades: "Nursery, Jr. KG, Sr. KG",
      description: "A nurturing environment where young learners develop foundational skills through play-based learning and creative activities.",
      color: "bg-pink-500/10 text-pink-600",
    },
    {
      icon: BookMarked,
      title: "Primary Section",
      grades: "Class 1 to Class 5",
      description: "Building strong academic foundations with focus on language skills, mathematics, environmental studies, and moral education.",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Calculator,
      title: "Middle School",
      grades: "Class 6 to Class 8",
      description: "Comprehensive curriculum covering sciences, mathematics, languages, and social sciences with practical applications.",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: FlaskConical,
      title: "Secondary Section",
      grades: "Class 9 & Class 10",
      description: "Rigorous preparation for board examinations with specialized coaching in all subjects and career guidance.",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Languages,
      title: "Islamic Studies",
      grades: "All Classes",
      description: "Comprehensive Islamic education including Quran recitation, Arabic language, and moral values integrated throughout.",
      color: "bg-school-gold/10 text-school-gold-dark",
    },
    {
      icon: GraduationCap,
      title: "Board Affiliation",
      grades: "Gujarat (GSEB)",
      description: "Affiliated with Gujarat Secondary and Higher Secondary Education Board (GSEB).",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-school-gold/10 text-school-gold-dark rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Academic Programs
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive education from pre-primary to secondary level, with a perfect blend of academic excellence and moral values.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-school-gold/30 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${program.color}`}>
                <program.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-sm font-medium text-school-gold mb-3">{program.grades}</p>
              <p className="text-muted-foreground text-sm">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Morning Shift</h3>
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 text-sm text-muted-foreground">Section</th>
                  <th className="text-left p-3 text-sm text-muted-foreground">Timings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3">Pre-School</td>
                  <td className="p-3">08:15 – 11:15</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Grade 9–12 (Gm)</td>
                  <td className="p-3">07:30 – 12:20</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Grades 11–12 (Commerce)</td>
                  <td className="p-3">07:30 – 12:20</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">XI–XII Science</td>
                  <td className="p-3">07:20 – 2:00</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-sm text-muted-foreground">Friday (Jummah) half day</p>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Noon Shift</h3>
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 text-sm text-muted-foreground">Section</th>
                  <th className="text-left p-3 text-sm text-muted-foreground">Timings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3">Pre-School</td>
                  <td className="p-3">11:15 – 14:15</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Grades 1–8 (Gm)</td>
                  <td className="p-3">12:30 – 17:20</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Girls’ School (1–9)</td>
                  <td className="p-3">12:00 – 17:20</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3 text-sm text-muted-foreground">Assembly, dua, and value talk at the start of each shift.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

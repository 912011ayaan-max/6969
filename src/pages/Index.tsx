import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import Notices from "@/components/Notices";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Crescent School - Excellence in Education | Admissions Open 2025-26</title>
        <meta
          name="description"
          content="Crescent School offers quality education from Nursery to Class 10, blending modern academics with traditional values. Maharashtra State Board affiliated. Apply now!"
        />
        <meta name="keywords" content="Crescent School, school admission, education, Maharashtra State Board, nursery school, primary school, secondary school" />
        <link rel="canonical" href="https://crescentschool.edu" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Programs />
          <Notices />
          <Facilities />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

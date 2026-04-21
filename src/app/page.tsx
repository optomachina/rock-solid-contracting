import About from "@/components/About";
import EstimateSection from "@/components/EstimateSection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <EstimateSection />
      </main>
      <Footer />
    </>
  );
}

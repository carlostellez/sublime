import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import Solution from "@/components/Solution";
import StockPlan from "@/components/StockPlan";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <PainPoint />
        <Solution />
        <StockPlan />
        <Process />
        <ContactForm />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

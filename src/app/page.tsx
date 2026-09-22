import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import Solution from "@/components/Solution";
import StockPlan from "@/components/StockPlan";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoint />
        <Solution />
        <StockPlan />
        <Process />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

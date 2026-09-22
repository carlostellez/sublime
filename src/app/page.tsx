import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Process from "@/components/Process";
import Wholesale from "@/components/Wholesale";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogosBar />
        <Features />
        <UseCases />
        <Process />
        <Wholesale />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

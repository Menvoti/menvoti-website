import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import AIAssistantSection from "@/components/AIAssistantSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <AIAssistantSection />
      <Footer />
    </main>
  );
}
import BrandIntroVedio from "../../Components/Home/BrandIntroVedio";
import ClientSection from "../../Components/Home/ClientSection";
import FAQ from "../../Components/Home/FAQ";
import Hero from "../../Components/Home/Hero";
import OurSelectedWork from "../../Components/Home/OurSelectedWork";
import ServicesSection from "../../Components/Home/ServicesSection";
import TechStack from "../../Components/Home/TechStack";
import Testimonials from "../../Components/Home/Testimonials";
import WorkFlow from "../../Components/Home/WorkFlow";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <BrandIntroVedio />
      <TechStack />
      <ServicesSection />

      <ClientSection />
      <OurSelectedWork />

      <WorkFlow />
      {/* <Services />
      <SelectedWork /> */}

      <Testimonials />

      <FAQ />
    </div>
  );
}

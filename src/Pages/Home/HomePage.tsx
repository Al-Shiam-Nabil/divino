import BrandIntroVedio from "../../Components/Home/BrandIntroVedio";
import ClientSection from "../../Components/Home/ClientSection";
import Hero from "../../Components/Home/Hero";
import OurSelectedWork from "../../Components/Home/OurSelectedWork";
import ServicesSection from "../../Components/Home/ServicesSection";
import TechStack from "../../Components/Home/TechStack";
import WorkFlow from "../../Components/Home/WorkFlow";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <OurSelectedWork />

      <ServicesSection />

      <ClientSection />
      <BrandIntroVedio />
      <TechStack />

      <WorkFlow />
      {/* <Services />
      <SelectedWork /> */}
    </div>
  );
}

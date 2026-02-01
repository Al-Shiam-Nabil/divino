import BrandIntroVedio from "../../Components/Home/BrandIntroVedio";
import ClientSection from "../../Components/Home/ClientSection";
import Hero from "../../Components/Home/Hero";
import ServicesSection from "../../Components/Home/ServicesSection";
import TechStack from "../../Components/Home/TechStack";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <ServicesSection />

      <ClientSection />
      <BrandIntroVedio />
      <TechStack />
      {/* <Services />
      <SelectedWork /> */}
    </div>
  );
}

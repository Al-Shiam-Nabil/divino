import BrandIntroVedio from "../../Components/Home/BrandIntroVedio";
import ClientSection from "../../Components/Home/ClientSection";
import FAQ from "../../Components/Home/FAQ";
import FinalHandshake from "../../Components/Home/FinalHandshake";
import Hero from "../../Components/Home/Hero";
import OurSelectedWork from "../../Components/Home/OurSelectedWork";
import OurServices from "../../Components/Home/OurServices";

import TechStack from "../../Components/Home/TechStack";
import Testimonials from "../../Components/Home/Testimonials";
import WorkFlow from "../../Components/Home/WorkFlow";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <BrandIntroVedio />
      <TechStack />
      {/* <ServicesSection /> */}
      <OurServices />
      {/* <Services /> */}

      <ClientSection />
      <OurSelectedWork />

      <WorkFlow />
      {/* <Services />
      <SelectedWork /> */}

      <Testimonials />

      <FAQ />

      <FinalHandshake />
    </div>
  );
}

import BrandIntroVedio from "../../Components/Home/BrandIntroVedio";
import Hero from "../../Components/Home/Hero";
import Services from "../../Components/Home/Services";
import TechStack from "../../Components/Home/TechStack";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BrandIntroVedio />
      <TechStack />
      <Services />
    </div>
  );
}

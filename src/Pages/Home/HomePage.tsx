import BrandIntroVedio from "../../Components/Home/BrandIntroVedio";
import Hero from "../../Components/Home/Hero";
import SelectedWork from "../../Components/Home/SelectedWork";
import Services from "../../Components/Home/Services";
import TechStack from "../../Components/Home/TechStack";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BrandIntroVedio />
      <TechStack />
      <Services />
      <SelectedWork />
    </div>
  );
}

export const metadata = {
  title: "Home",
};
import HeroSection from "@/components/hero-section";
import Information from "@/components/info";
import SkillBar from "@/components/skill-bar";
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <SkillBar />
      <Information />
     
    </div>
  );
};

export default Homepage;

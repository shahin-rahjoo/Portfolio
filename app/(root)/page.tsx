export const metadata = {
  title: "Home",
};
import HeroSection from "@/components/hero-section";
import SkillBar from "@/components/skill-bar";
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <SkillBar />
    </div>
  );
};

export default Homepage;

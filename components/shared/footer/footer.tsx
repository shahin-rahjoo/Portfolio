import { GithubIcon, LinkedinIcon } from "./social-icons";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" w-full">
      <div className="wrapper flex-between flex-col md:flex-row py-6 gap-4">
        <p className="text-sm text-orange-400">
          Created By <span className="font-bold">Shahin</span>. {currentYear}
        </p>
        <div className="flex gap-2">
          <Button
            asChild
            variant="ghost"
            size="icon-lg"
            className="text-orange-400"
          >
            <a href="https://github.com/shahin-rahjoo" target="blank">
              <GithubIcon />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon-lg"
            className="text-orange-400"
          >
            <a
              href="https://www.linkedin.com/in/shahinrahjoo2000/"
              target="blank"
            >
              <LinkedinIcon />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

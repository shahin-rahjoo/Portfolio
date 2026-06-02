import { GithubIcon, LinkedinIcon } from "./social-icons";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" w-full">
      <div className="wrapper flex-between flex-col md:flex-row py-6 gap-4">
        <p className=" text-xl">
          Created By <span className="font-bold ">SHAHIN RAHJOO.</span>{" "}
          {currentYear}
        </p>
        <div className="flex gap-4">
          <Button asChild variant="ghost" size="icon-lg">
            <a href="https://github.com/shahin-rahjoo" target="_blank">
              <GithubIcon className="size-7" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon-lg">
            <a
              href="https://www.linkedin.com/in/shahinrahjoo2000/"
              target="_blank"
            >
              <LinkedinIcon className="size-7" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

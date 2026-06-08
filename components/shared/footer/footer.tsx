import { GithubIcon, LinkedinIcon, GmailIcon } from "./social-icons";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    label: "GitHub profile",
    href: "https://github.com/shahin-rahjoo",
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/shahinrahjoo2000/",
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Email Shahin",
    href: "mailto:shahin.rahjoo2000@gmail.com",
    icon: GmailIcon,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="wrapper flex-between flex-col gap-4 py-6 md:flex-row">
        <p>
          {currentYear} <span className="font-bold">SHAHIN RAHJOO</span>
        </p>

        <footer>
          <ul className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <li key={href}>
                <Button asChild variant="ghost" size="icon-lg">
                  <a
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;

import Logo from "./logo";
import ModeToggle from "./mode-toggle";
import Navigation from "./navigation";
import MobileMenu from "./mobile-menu";
const Header = () => {
  return (
    <div className="wrapper flex-between absolute top-0 w-full z-50">
      <Logo />
      <Navigation className="hidden md:flex items-center gap-6" />
      <ModeToggle />
      <MobileMenu />
    </div>
  );
};

export default Header;

import Logo from "./logo";
import ModeToggle from "./mode-toggle";
import Navigation from "./navigation";
import MobileMenu from "./mobile-menu";
const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <Logo />
        </div>

        <div className="justify-self-center">
          <Navigation className="hidden md:flex items-center gap-6" />
        </div>

        <div className="flex items-center gap-4 justify-self-end">
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
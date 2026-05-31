import Logo from "./logo";
import ModeToggle from "./mode-toggle";
import Navigation from "./navigation";
const Header = () => {
  return (
    <div className="wrapper flex-between border-b">
      <Logo />
      <Navigation />
      <ModeToggle />
    </div>
  );
};

export default Header;

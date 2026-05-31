import Logo from "./logo";
import ModeToggle from "./mode-toggle";
const Header = () => {
  return (
    <div className="wrapper flex-between border-b">
        
      <Logo />
      <ModeToggle/>
    </div>
  );
};

export default Header;

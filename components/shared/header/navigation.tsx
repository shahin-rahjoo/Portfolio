import { Button } from "@/components/ui/button";
import Link from "next/link";
const Navigation = ({className}: {className?: string}) => {
  return (
    <nav className={className}>
      <Button asChild variant="ghost">
        <Link href="/projects">Projects</Link>
      </Button>

      <Button asChild variant="ghost">
        <Link href="/about-me">About Me</Link>
      </Button>

      <Button asChild variant="ghost">
        <Link href="/contact">Contact</Link>
      </Button>
    </nav>
  );
};

export default Navigation;

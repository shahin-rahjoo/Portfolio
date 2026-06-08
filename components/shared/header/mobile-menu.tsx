import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "./navigation";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger className="inline-flex items-center justify-center">
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col p-4 ">
          <SheetDescription className="sr-only">
            Navigation menu for mobile application
          </SheetDescription>
          <SheetTitle className="flex justify-center pt-12">
            <Image
              src="/images/logo.svg"
              alt={APP_NAME}
              width={78}
              height={78}
              className="w-20 h-20"
            />
          </SheetTitle>
          <div className="flex flex-col items-center gap-6 mt-8">
            <Button asChild variant="ghost">
              <Link href="/">Home</Link>
            </Button>
            <Navigation className="flex flex-col items-center gap-6" />
          </div>
          <SheetClose asChild>
            <Button
              variant="default"
              className="self-center mt-4 w-32 rounded-2xl bg-orange-500"
            >
              Close
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;

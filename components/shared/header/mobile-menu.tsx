import { Menu } from "lucide-react";
import Navigation from "./navigation";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const MobileMenu = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col p-4">
          <SheetTitle className="wrapper flex-between  justify-center pt-12">
            <Image
              src="/images/logo.svg"
              alt={APP_NAME}
              width={78}
              height={78}
              className="w-20 h-20"
            />
          </SheetTitle>

          <Navigation className="flex flex-col items-center gap-6 mt-8" />

          <SheetDescription className="sr-only">
            Navigation menu for mobile application
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;

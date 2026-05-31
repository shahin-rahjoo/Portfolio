"use client";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer"
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ModeToggle), { ssr: false });

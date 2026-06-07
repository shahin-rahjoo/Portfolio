"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const skills = [
  { name: "HTML", src: "/images/html.svg" },
  { name: "CSS", src: "/images/css.svg" },
  { name: "JavaScript", src: "/images/javascript.svg" },
  { name: "TypeScript", src: "/images/typescript.svg" },
  { name: "React", src: "/images/reactjs.svg" },
  { name: "NextJS", src: "/images/nextjs.svg" },
  { name: "Tailwindcss", src: "/images/tailwindcss.svg" },
  { name: "Git", src: "/images/git.svg" },
  { name: "PostgreSQL", src: "/images/postgres.svg" },
  { name: "Postman", src: "/images/postman.svg" },
  { name: "Selenium", src: "/images/selenium.svg" },
  { name: "Playwright", src: "/images/playwright.svg" },
];
const SkillBar = () => {
  return (
    <div className="w-full py-10">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="mx-8 flex flex-col items-center gap-2"
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={48}
              height={48}
              priority={true}
              className="h-12 w-12 object-contain"
            />
            <span className="text-xs text-zinc-500">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillBar;

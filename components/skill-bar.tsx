const SkillBar = () => {
  const skills = [
    { name: "HTML", src: "/images/html.svg", showMobile: false },
    { name: "CSS", src: "/images/css.svg", showMobile: false },
    { name: "JavaScript", src: "/images/javascript.svg", showMobile: true },
    { name: "TypeScript", src: "/images/typescript.svg", showMobile: true },
    { name: "React", src: "/images/reactjs.svg", showMobile: true },
    { name: "NextJS", src: "/images/nextjs.svg", showMobile: true },
    { name: "Tailwindcss", src: "/images/tailwindcss.svg", showMobile: false },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-4 md:flex md:flex-row md:justify-between items-center gap-6 px-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          title={skill.name}
          className={`h-16 w-full bg-contain bg-no-repeat bg-center transition-all ${skill.showMobile ? "block" : "hidden md:block"}`}
          style={{ backgroundImage: `url('${skill.src}')` }}
        />
      ))}
    </div>
  );
};

export default SkillBar;

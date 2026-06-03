import Image from "next/image";
export const metadata = {
  title: "About ME",
};
const AboutMe = () => {
  const techStacks = [
    { name: "JavaScript", src: "/images/javascript.svg" },
    { name: "TypeScript", src: "/images/typescript.svg" },
    { name: "React", src: "/images/reactjs.svg" },
    { name: "NextJS", src: "/images/nextjs.svg" },
    { name: "Git", src: "/images/git.svg" },
    { name: "PostgreSQL", src: "/images/postgres.svg" },
    { name: "Postman", src: "/images/postman.svg" },
    { name: "Selenium", src: "/images/selenium.svg" },
    { name: "Playwright", src: "/images/playwright.svg" },
  ];
  return (
    <div>
      <div className="flex wrapper mt-24 gap-9 ">
        <div className="flex justify-center lg:flex-start md:flex-start ">
          <Image
            src="/images/shahin2.png"
            width={300}
            height={300}
            alt="my picture"
            title="Shahin's Pic"
            priority={true}
            className=" w-64 max-w-sm h-auto"
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            quam. Ut quas ratione magni eaque amet nobis, corporis nam
            asperiores distinctio repudiandae, itaque id reprehenderit
            aspernatur quibusdam voluptatum autem vel, illum deserunt. Quam
            adipisci veniam ut dicta voluptates fugit debitis unde quae quidem
            obcaecati architecto labore beatae cum ratione tenetur sunt impedit
            magnam error asperiores nisi accusantium voluptatem saepe, minus
            dolor. Aut quod iste magni totam incidunt minima provident rem dicta
            hic, officiis eligendi placeat ullam, esse animi voluptates.
            Voluptate?
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <p className="font-bold text-2xl">
          Some of the tech stacks that I worked with
        </p>
      </div>
      <div className="w-full mt-10 bg-red-200 max-w-7xl mx-auto grid grid-cols-4 md:flex md:flex-row md:justify-between items-center gap-6 px-4">
        {techStacks.map((techStack) => (
          <div
            key={techStack.name}
            title={techStack.name}
            className="h-16 w-full bg-contain bg-no-repeat bg-center transition-all"
            style={{ backgroundImage: `url('${techStack.src}')` }}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

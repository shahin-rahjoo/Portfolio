import Image from "next/image";
export const metadata = {
  title: "About ME",
};
const AboutMe = () => {
  const techStacks = [
    { name: "HTML", src: "/images/html.svg"},
    { name: "CSS", src: "/images/css.svg"},
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
  return (
    <div>
      <div className="wrapper mt-24 flex flex-col md:flex-row items-center gap-9">
        <div className="flex w-full justify-center md:w-auto md:justify-start">
          <Image
            src="/images/shahin2.png"
            width={300}
            height={300}
            alt="my picture"
            title="Shahin's Pic"
            priority={true}
            className="w-56 sm:w-64 md:w-72 rounded-3xl max-w-sm h-auto"
          />
        </div>

        <div className="w-full">
          <p className="text-center md:text-left text-sm sm:text-base leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            reiciendis numquam inventore labore iusto consequuntur aspernatur
            dolores nesciunt dolorum ipsam? Quia est qui minus officiis
            obcaecati vel a quo possimus dolor optio quaerat sequi sint,
            distinctio dolore! Eveniet cupiditate praesentium aperiam nobis,
            quidem tempore! Sed numquam quasi nemo itaque recusandae! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus,
            perspiciatis iusto aspernatur deleniti est similique voluptate
            perferendis repellat vitae commodi ipsum mollitia ipsa. Molestiae
            nostrum voluptas laudantium ratione harum, temporibus in nihil
            aliquam numquam quas quia aperiam. Molestias quisquam corporis quae,
            iste eum sed totam sint magni beatae impedit officia atque expedita
            itaque. Quae sit perspiciatis quaerat modi nobis, adipisci odio
            iure, accusamus nostrum nisi assumenda similique animi possimus
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center px-4">
        <p className="text-center font-bold text-xl sm:text-2xl">
          Some of the tech stacks that I worked with
        </p>
      </div>

      <div className="w-full mt-10 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {techStacks.map((techStack) => (
          <div
            key={techStack.name}
            title={techStack.name}
            className="h-24 sm:h-28 md:h-32 flex items-center justify-center"
          >
            <Image
              src={techStack.src}
              alt={techStack.name}
              width={128}
              height={128}
              className="w-16 sm:w-20 md:w-24 object-contain"
              style={{ height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

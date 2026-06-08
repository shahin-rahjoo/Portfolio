import Image from "next/image";

const Information = () => {
  return (
    <section>
      <div className="w-full max-w-7xl mx-auto px-6 py-16 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col justify-between bg-background border border-border p-4 rounded-4xl min-h-44">
            <p className="text-foreground">
              <span className="font-bold text-xl text-orange-400">
                Experience:
              </span>{" "}
              I worked with the{" "}
              <a
                href="https://football360.ir/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline underline-offset-2 hover:text-orange-500 transition-colors"
              >
                Football360
              </a>{" "}
              team as a frontend developer and QA engineer, where I gained
              hands-on experience building, testing, and improving real
              user-facing features.
            </p>
          </div>

          <div className="flex flex-col justify-between bg-background border border-border p-4 rounded-4xl min-h-44">
            <p className="text-foreground">
              <span className="font-bold text-xl text-orange-400">
                Projects:
              </span>{" "}
              I build side projects to learn and explore new technologies.
              Crypto dashboard, e-commerce platform etc. With a focus on testing
              and real usability.
            </p>
          </div>

          <div className="flex flex-col justify-between bg-background border border-border p-4 rounded-4xl min-h-44 w-full sm:col-span-2">
            <p className="text-foreground">
              <span className="font-bold text-xl text-orange-400">
                Education:
              </span>{" "}
              I&apos;m currently studying for a master&apos;s degree in
              Usability Engineering at Rhine-Waal University in Germany and hold
              a bachelor&apos;s degree in Computer Engineering.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/infopic2.svg"
            width={400}
            height={400}
            priority={true}
            alt="info picture"
            className="w-full max-w-sm h-auto object-cover rounded-4xl"
          />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-16 mt-12 flex justify-center">
        <p className="bg-linear-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text  font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
          GET IN TOUCH
        </p>
      </div>
    </section>
  );
};

export default Information;

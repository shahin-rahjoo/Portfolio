import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[80vh] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
        <div className="w-full max-w-xl text-center lg:text-left">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Frontend developer &{" "}
            <span className="bg-linear-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
              QA Engineer
            </span>
          </h1>
          <p className="pt-6 text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            inventore animi quae repudiandae perspiciatis dignissimos debitis.
          </p>
        </div>

        <div className="w-72 sm:w-80 md:w-96 lg:w-105 shrink-0">
          <Image
            src="/images/shahin2.png"
            alt="Shahin Rahjoo"
            width={500}
            height={500}
            priority
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

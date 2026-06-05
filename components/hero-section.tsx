const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-[url('/images/grid-repeat.svg')] bg-center ">
      <div className="w-full max-w-7xl mx-auto px-6 min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-3xl text-center">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
            Frontend developer &{" "}
            <span className="bg-linear-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
              QA Engineer
            </span>
          </h1>

          <p className="mx-auto max-w-2xl pt-6 text-sm md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            inventore animi quae repudiandae perspiciatis dignissimos debitis ut
            amet ab molestiae!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

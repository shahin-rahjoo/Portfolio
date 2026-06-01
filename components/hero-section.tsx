const HeroSection = () => {
  return (
    <section className="bg-[url('/images/grid.svg')] relative bg-center w-full max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
          Frontend developer & {""}
          <span className="bg-linear-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
            QA Engineer
          </span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <p className=" max-w-2xl pt-6 text-sm md:text-lg  ">
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

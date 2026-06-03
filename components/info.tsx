import Image from "next/image";

const Information = () => {
  return (
    <section>
      <div className="w-full max-w-7xl mx-auto px-6 py-16 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  rounded-4xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col justify-between bg-zinc-900 p-4 rounded-4xl h-44">
            <p>
              <span className="font-bold text-2xl md:text-2xl text-orange-400">
                Experience:
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis,
            </p>
          </div>

          <div className="flex flex-col justify-between bg-zinc-900 p-4 rounded-4xl h-44">
            <p>
              <span className="font-bold text-2xl md:text-2xl text-orange-400">
               Projects:
              </span>
             
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              
            </p>
          </div>

          <div className="flex flex-col justify-between bg-zinc-900 p-4 rounded-4xl h-44 w-full sm:col-span-2">
            <p>
              <span className="font-bold text-2xl md:text-2xl text-orange-400">
                Education:
              </span>
              Lorem ipsum dolor sit amet consectetur Blanditiis, porro. lorem29
              Lorem ipsum dolor sit amet, consectetur adip
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/shahin2.png"
            width={400}
            height={400}
            priority={true}
            alt="Shahin's picture"
            title="Shahin's picture"
            className="w-full max-w-sm h-auto object-cover rounded-4xl"
          />
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 py-16 mt-12 flex justify-center">
        <p className="text-orange-400 font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
          GET IN TOUCH
        </p>
      </div>
    </section>
  );
};

export default Information;

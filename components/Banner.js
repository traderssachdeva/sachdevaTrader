import React from "react";

const Gridone = [
  { id: 1, src: "/rice11.jpg" },
  { id: 2, src: "/rice2.jpg" },
];

const Gridtwo = [
  { id: 1, src: "/rice4.jpg" },
  { id: 2, src: "rice6.jpg" },
  { id: 3, src: "/rice5.jpg" },
];
const Gridthree = [
  { id: 1, src: "/rice.jpg" },
  { id: 2, src: "rice7.jpg" },
];

function Banner() {
  return (
    <div>
      <div className="relative overflow-hidden bg-[#EEEEEE]">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-16">
            <div className="sm:max-w-lg lg:ml-8 xl:-ml-8">
              <h1 className="  capitalize md:normal-case text-4xl  font-semibold tracking-tight text-black sm:text-6xl">
                Feeding the future with quality rotten rice grains
              </h1>
              <p className="mt-4 text-xl text-black/80">
                Our rotten rice grains are sourced from the finest producers and
                are carefully screened to ensure quality and freshness.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {Gridone.map((gridone) => (
                          <div
                            key={gridone.id}
                            className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                          >
                            <img
                              src={gridone.src}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {Gridtwo.map((gridtwo) => (
                          <div
                            key={gridtwo.id}
                            className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                          >
                            <img
                              src={gridtwo.src}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {Gridthree.map((gridthree) => (
                          <div
                            key={gridthree.id}
                            className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                          >
                            <img
                              src={gridthree.src}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#ordernow"
                  className=" xl:-ml-8 capitalize rounded-md border border-transparent bg-[#3A98B9] py-3 px-8 text-center font-medium text-white hover:bg-black"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

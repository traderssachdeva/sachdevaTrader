import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-8 lg:px-20 md:py-8 mb-40 md:px-6 py-4 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl text-center my-4 lg:text-5xl font-bold leading-9 text-black pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-black/80">
              Welcome to Dheeraj Enterprises your trusted source for
              high-quality rotten rice grains. Our company was founded with a
              mission to provide sustainable agricultural solutions that benefit
              both farmers and the environment. We believe in the power of
              utilizing waste materials for agricultural purposes, and our
              products reflect our commitment to sustainability. Our rotten rice
              grains are carefully sourced and screened to ensure the highest
              quality and freshness, making them the perfect choice for animal
              feed, composting, and other agricultural uses.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full rounded-lg object-cover h-full"
              src="/about-us.jpg"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

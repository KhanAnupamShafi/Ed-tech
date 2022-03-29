import React from "react";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="w-full relative bg-[#FFF4EE]">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full z-10 bg-[#CC0000] lg:w-1/2 2xl:w-2/5 px-4 py-4 mb-12 mb:mb-0">
          <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-stone-200 to-slate-300">
            The Ocean Of Opportunities!
          </span>
          <div className="flex flex-wrap mt-5">
            <div className="bg-[#F9E3E2] rounded-lg mx-auto lg:mt-0 lg:px-16 px-4 py-6">
              <div className="md:pl-8 md:border-l border-pink-900">
                <h1 className="text-pink-900 font-bold font-heading md:text-6xl text-2xl font-bold font-sans m-0 md:leading-none">
                  Join our Academy
                </h1>

                <p className="text-[#3A001E] text-lg md:max-w-lg w-full md:my-8">
                  Our vision is to build a world where all
                  <span className="font-bold text-xl"> young people </span>
                  thrive by realizing their{" "}
                  <span className="font-bold text-xl">full potential</span>. Our
                  mission is to ensure that young people have{" "}
                  <span className="font-bold text-xl">equal opportunities</span>{" "}
                  in society by harnessing the power of knowledge for employment
                  and personal development.
                </p>
                <a
                  href="#"
                  className="bg-transparent text-[#3A001E] font-bold hover:bg-red-900/80 hover:text-white border border-pink-900 text-center py-2 px-4 rounded"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full sm:w-auto mt-8 sm:mt-0 flex"></div>
          </div>

          <p className="m-12 lg:mb-24 text-lg text-white opacity-90">
            Discover how it works and start for free.
          </p>
        </div>
        <div className="w-full lg:w-1/2  px-8 mx-3">
          <div className="inset-0 z-negative lg:opacity-90 opacity-50">
            <img className="object-fit w-4/5 m-auto p-4" src={banner} alt="" />
          </div>

          <div className="items-center flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col my-auto">
              <div className="">
                <div className="bg-brand-white10 inline-flex justify-center items-center rounded-full">
                  <div className="bg-pink-200/50 text-black font-semibold px-2 rounded-full m-1">
                    75% SAVE
                  </div>
                  <p className="text-black px-2 ">Unlimited learning!</p>
                </div>
              </div>
              <h1 className="lg:text-5xl font-bold pt-8 md:text-5xl text-4xl">
                Fastest & secure platform to learn
              </h1>
              <p className="text-center m-auto pt-8 md:w-1/2 opacity-70 pb-4">
                See Our Course{" "}
                <span className="text-indigo-600 cursor-pointer">
                  List Here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

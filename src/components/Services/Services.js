import React from "react";

const Services = () => {
  return (
    <div class="py-20 md:px-20 sm:px-14 px-6 bg-[#FFF4EE]">
      <div className="pt-12 lg:pt-20 pb-12 bg-[#F9E3E2]">
        <h2 className="text-4xl my-2">Our Courses</h2>
      </div>
      <div class="sm:flex items-center shadow-md">
        <div class="md:px-10 sm:px-5">
          <h1 class="text-gray-800 font-bold text-2xl my-2">
            long established
          </h1>
          <p class="p-1 text-gray-700 mb-2 md:mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </p>
          <div class="flex justify-between mb-2 p-2">
            <span class="font-thin text-sm">May 20th 2020</span>
            <span class="mb-2 text-gray-800 font-bold">Read more</span>
          </div>
        </div>
        <div>
          <img
            class="bg-cover"
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

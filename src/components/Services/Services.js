import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../../data";
import photo1 from "../../images/photo-1.jpg";
import photo2 from "../../images/photo-2.jpg";
import photo3 from "../../images/photo-3.jpg";
import photo4 from "../../images/photo-4.jpg";

const Services = () => {
  return (
    <div className="py-20 md:px-20 sm:px-14 px-6 bg-[#FFF4EE]">
      <div className="pt-12 lg:pt-20 pb-12 bg-[#F9E3E2]">
        <h2 className="text-4xl my-2">Our Courses</h2>
      </div>
      <div className="bg-white border-4 border-yellow-700 mt-14 sm:flex items-center shadow-md">
        <div className="pt-5 md:pt:0 md:px-10 sm:px-5">
          <h1 className="text-gray-800 font-bold text-2xl my-2">
            {courses[0].title}
          </h1>
          <p className="p-1 text-gray-700 mb-2 md:mb-6">{courses[0].desc}</p>
          <div className="flex flex-col justify-between mb-2 p-2">
            <div className="shadow mt-5 pb-2">
              <p className="font-bold text-sm">
                Starts Form:
                <span className="font-thin text-sm"> May 20th 2022</span>
              </p>
              <Link
                to={`/courses/${courses[0].id}`}
                className="inline-block py-3 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-md"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className="bg-cover" src={photo1} alt="" />
        </div>
      </div>
      <div className="bg-white border-4 border-yellow-700 mt-14 sm:flex items-center shadow-md">
        <div>
          <img className="bg-cover" src={photo2} alt="" />
        </div>
        <div className="md:px-10 sm:px-5">
          <h1 className="text-gray-800 font-bold text-2xl my-2">
            {courses[1].title}
          </h1>
          <p className="p-1 text-gray-700 mb-2 md:mb-6">{courses[1].desc}</p>
          <div className="flex flex-col justify-between mb-2 p-2">
            <div className="inline-block shadow mt-5 pb-2">
              <p className="font-bold text-sm">
                Starts Form:
                <span className="font-thin text-sm"> May 20th 2022</span>
              </p>
              <Link
                to={`/courses/${courses[1].id}`}
                className="inline-block py-3 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-md"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-4 border-yellow-700 mt-14 sm:flex items-center shadow-md">
        <div className="md:px-10 sm:px-5 border-r-4">
          <h1 className="text-gray-800 font-bold text-2xl my-2">
            {courses[2].title}
          </h1>
          <p className="p-1 text-gray-700 mb-2 md:mb-6">{courses[2].desc}</p>
          <div className="flex flex-col justify-between mb-2 p-2">
            <div className="shadow mt-5 pb-2">
              <p className="font-bold text-sm">
                Starts Form:
                <span className="font-thin text-sm"> May 20th 2022</span>
              </p>
              <Link
                to={`/courses/${courses[2].id}`}
                className="inline-block py-3 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-md"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className="bg-cover" src={photo3} alt="" />
        </div>
      </div>
      <div className="bg-white border-4 border-yellow-700 mt-14 sm:flex items-center shadow-md">
        <div>
          <img className="bg-cover" src={photo4} alt="" />
        </div>
        <div className="md:px-10 sm:px-5">
          <h1 className="text-gray-800 font-bold text-2xl my-2">
            {courses[3].title}
          </h1>
          <p className="p-1 text-gray-700 mb-2 md:mb-6">{courses[3].desc}</p>
          <div className="flex flex-col justify-between mb-2 p-2">
            <div className="inline-block shadow mt-5 pb-2">
              <p className="font-bold text-sm">
                Starts Form:
                <span className="font-thin text-sm"> May 20th 2022</span>
              </p>
              <Link
                to={`/courses/${courses[3].id}`}
                className="inline-block py-3 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-md"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

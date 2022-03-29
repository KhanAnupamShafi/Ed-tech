import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../data";
const Course = () => {
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  useEffect(() => {
    const courseFound = courses.find(
      (course) => course.id === parseInt(courseId)
    );
    setCourse(courseFound);
  }, []);

  return (
    <div class="py-4 bg-black text-white">
      <div class="container mx-auto flex flex-col md:flex-row my-12 md:my-36">
        <div class="flex flex-col w-full lg:w-2/5 p-8">
          <p class="text-3xl md:text-5xl text-yellow-500 my-4 leading-relaxed md:leading-snug">
            {course.title}
          </p>
          <p class="font-sans flex items-center justify-center text-sm md:text-lg my-2 md:my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            &nbsp; 4.0 (2100 reviews)
          </p>
          <p class="font-sans text-sm md:text-lg my-2 md:my-4">
            <svg
              class="inline-block fill-current mr-2"
              className="h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            {course.desc}
          </p>
          <p class="font-sans text-sm md:text-lg my-2 md:my-4">
            <div class="mt-6">
              <button class="text-xl bg-white p-2 rounded-lg underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                Join Now
              </button>
            </div>
          </p>{" "}
          <br /> <br />
          <br />
          <p class="font-sans text-sm md:text-lg my-2 md:my-4">
            <span className="text-yellow-900 font-bold text-xl">
              {course.enroll}
            </span>{" "}
            enrolled on this course
          </p>
        </div>
        <div class=" flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
          <div class="container">
            <div class="relative flex flex-col min-w-0 break-words w-full">
              <div class="flex-auto p-5 lg:p-10">
                <img src={course.picture} alt="course image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

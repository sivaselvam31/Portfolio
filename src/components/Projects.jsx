import React from "react";
import { projects } from "../constants/const";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Projects = () => {
  return (
    <section className="relative w-full z-10 my-10">
      <div className="text-center my-10">
        <h1 className="text-4xl lg:text-6xl font-bold text-purple-600">
          <span className="text-white">What</span> I've Made
        </h1>
        <p className="md:text-xl text-lg font-semibold mt-5">
          Here are few works
          <br className="md:hidden" /> I have Built so far
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-28 lg:mx-32 mx-10 my-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-center items-center"
          >
            {/* Project card */}
            <div className="border border-purple-500 h-full md:w-80 py-10 px-2 rounded-md shadow-lg shadow-purple-700 md:py-10 md:px-5 lg:rounded-md lg:w-96 flex flex-col justify-between">
              {/* Project Image */}
              <div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="mx-auto h-44 w-44 lg:h-56 lg:w-56"
                />
              </div>
              {/* Project Name and Description */}
              <div className="text-center">
                <h1 className="text-xl font-semibold mt-2">{project.name}</h1>
                <p className="text-sm font-semibold mt-2 text-justify indent-2">
                  {project.description}
                </p>
              </div>
              {/* Buttons */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 px-4 py-2 bg-purple-600 rounded-md flex flex-row gap-2">
                    <FaGithub className="text-white w-6 h-6" /> Github
                  </button>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 px-4 py-2 bg-purple-600 rounded-md flex flex-row gap-2">
                    <CgWebsite className="text-white w-6 h-6" /> Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

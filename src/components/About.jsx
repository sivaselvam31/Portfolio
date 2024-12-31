import React from "react";
import { Find_Me_Icons } from "../constants/const";

const About = () => {
  return (
    <section className="absolute w-full z-10">
      <h1 className="text-4xl text-center mb-8">
        Let Me <br className="md:hidden" /> <span className="text-purple-600">Indroduce</span>
        <br className="md:hidden" /> MySelf
      </h1>
      <div className="flex flex-col md:flex-row md:mx-10 mx-2">
        <div className="md:w-2/3 p-2 text-justify indent-5 text-xl space-y-5">
          <h1>
            I’m a <span className="text-purple-600">web developer</span>{" "}
            passionate about creating{" "}
            <span className="text-purple-600">clean, functional,</span> and{" "}
            <span className="text-purple-600">user-friendly</span> websites.
          </h1>
          <h1>
            With <span className="text-purple-600">Passion</span> for{" "}
            <span className="italic">Innovation</span>, I enjoy building{" "}
            <span className="text-purple-600">solutions</span> that solve{" "}
            <span className="text-purple-600">real World problems</span>.
          </h1>
          <h1>
            Beyond coding, I love playing{" "}
            <span className="text-purple-600">Cricket</span>, exploring{" "}
            <span className="text-purple-600">New Things</span>, and learning{" "}
            <span className="text-purple-600">New Skills</span>. Let’s connect
            and create something <span className="italic">amazing...!</span>
          </h1>
        </div>
        <div className="md:w-1/3 p-5 flex justify-center">
          <img src="#" alt="AboutImg" 
          className="h-44 w-44 rounded-full border"/>
        </div>
      </div>
      <div className="mx-2 text-center">
        <h1 className="text-3xl mb-2">Find Me On</h1>
        <p>Feel free to <span className="text-purple-600">Connect </span>with me</p>
        <ul className="flex flex-row justify-center gap-3 my-4">
        {
            Find_Me_Icons.map((icon)=> (
                <li key={icon.id}
                className="bg-gray-600 h-8 w-8 flex justify-center items-center bg-origin-border rounded-full">
                    <a href={icon.href} className="">
                        {icon.icon}
                    </a>
                </li>
            ))
        }
        </ul>
      </div>
    </section>
  );
};

export default About;

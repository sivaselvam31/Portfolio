import React from "react";
import { skills, Tools } from "../constants/const";

const Skills = () => {
  return (
    <section className="relative w-full z-10 my-10 lg:mt-20">
      {/* Skillset section */}

      <div className="text-center text-4xl lg:text-6xl my-10 font-bold">
        <h1>
          Professional <span className="text-purple-600">Skillset</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 mx-10 md:grid-cols-3 lg:grid-cols-5 lg:px-24">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col justify-center items-center"
          >
            <div className="border border-purple-500 py-4 px-4 rounded-md shadow-md shadow-purple-700 md:py-6 md:px-14 lg:px-[4.5rem] lg:rounded-sm">
              {skill.icon}
            </div>
            <p className="mt-2 font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Tools section */}

      <div className="text-center text-4xl lg:text-6xl my-10 lg:mt-20 font-bold">
        <h1>
          <span className="text-purple-600">Tools</span> I use
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 mx-10 md:grid-cols-3 lg:grid-cols-5 lg:px-24">
          {Tools.map((Tool) => (
            <div
              key={Tool.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="border border-purple-500 py-4 px-4 rounded-md shadow-md shadow-purple-700 md:py-6 md:px-14 lg:px-[4.5rem] lg:rounded-sm">
                {Tool.icon}
              </div>
              <p className="mt-2 font-semibold text-center">{Tool.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Horizondol Line */}
      <div className="flex justify-center mt-20">
        <hr className="border-gray-700 w-[90%]" />
      </div>

    </section>

    // For Grid practice
    // <>
    //   <div class="grid grid-cols-3 gap-x-16 gap-y-12 relative w-full z-10 my-10 lg:mt-20">
    //     <div class="col-span-2 p-4 bg-blue-500">Item 1</div>
    //     <div class="p-4 bg-green-500">Item 2</div>
    //     <div class="flex flex-col justify-center items-center mx-4">
    //       <div className="border-2 border-white w-auto h-auto p-4">
    //         <h1 class="text-2xl text-white">Item 3</h1>
    //       </div>
    //       <div>
    //         <p className="my-2">item Title</p>
    //       </div>
    //     </div>
    //     <div class="p-4 bg-yellow-500">Item 4</div>
    //     <div class="p-4 bg-purple-500">Item 5</div>
    //     <div class="p-4 bg-purple-500">Item 5</div>
    //     <div class="p-4 bg-purple-500">Item 5</div>
    //     <div class="p-4 bg-purple-500">Item 5</div>
    //   </div>

    //   <div class="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 relative w-full z-10 my-10 lg:mt-20 text-center">
    //     <div class="p-4 bg-blue-500">Item 1</div>
    //     <div class="p-4 bg-green-500">Item 2</div>
    //     <div class="p-4 bg-red-500">Item 3</div>
    //   </div>
    // </>
  );
};

export default Skills;

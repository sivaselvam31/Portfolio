import ParticlesContainer from "./Particle";
import Type from "./Type";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Particles Background */}
      <ParticlesContainer />

      {/* Hero Page Content */}
      <div className="absolute top-16 container mx-auto h-[90%] inset-0 flex flex-col md:flex-row md:justify-between z-10 md:pb-10 px-5 md:px-10">
        
        {/* Image Section */}
        <div className="w-full mt-14 md:w-1/2 flex items-center justify-center order-1 md:order-2 mb-10 md:mb-0">
          <img
            src="#"
            alt="BannerImg"
            className="border rounded-full w-48 h-48 lg:w-80 lg:h-80"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start order-2 md:order-1 md:mt-16 md:ml-16 lg:mt-16 lg:space-y-9">
          <h1 className="text-3xl md:text-4xl text-center md:text-left lg:text-5xl">
            Hi There...!
          </h1>
          <h1 className="text-3xl md:text-4xl my-5 text-center md:text-left lg:text-6xl">
            I'M <span className="text-3xl md:text-5xl text-purple-600 lg:text-5xl">Sivaselvam</span>
          </h1>
          <div className="text-2xl md:text-3xl text-purple-600 md:mt-10 lg:text-5xl">
            <Type />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

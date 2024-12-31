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
            className="border rounded-full w-48 h-48 md:w-96 md:h-96"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start order-2 md:order-1 md:mt-10 md:ml-16">
          <h1 className="text-3xl md:text-6xl text-white text-center md:text-left">
            Hi There...!
          </h1>
          <h1 className="text-3xl md:text-6xl text-white my-5 text-center md:text-left">
            I'M <span className="text-3xl md:text-6xl text-purple-600">Sivaselvam</span>
          </h1>
          <div className="text-2xl md:text-5xl text-purple-600 md:mt-10">
            <Type />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

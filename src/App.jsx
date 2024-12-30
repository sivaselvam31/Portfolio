import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import homeBg from "./assets/home-bg.jpg";

function App() {
  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-repeat z-10 opacity-5"
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
      ></div>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;

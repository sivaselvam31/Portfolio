import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import homeBg from "./assets/home-bg.jpg";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

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
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;

// https://chatgpt.com/share/67bf6e2c-477c-8008-8095-9f030c2accba

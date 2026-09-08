import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Architecture from "./components/Architecture";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";
import Aurora from "./components/Aurora";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-ink font-body">
      <Starfield />
      <Aurora />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:bg-teal focus:text-bg focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <div className="relative z-10">
        <Nav />
        <main id="main">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Architecture />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

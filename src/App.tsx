import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Box minH="100vh" w="100%">
      <Navbar />
      <Box as="main" w="100%" p={0} m={0}>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Awards />
        <Projects />
        <Gallery />
        <Videos />
        <Skills />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;

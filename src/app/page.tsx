import { Header } from "./components/Header";
import { HomeHero } from "./components/HomeHero";
import { Practice } from "./components/Practice";
import SocialIcons from "./components/SocialIcons";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      
       <SocialIcons />
      <Header />
      
      <HomeHero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      
    </>
  );
}
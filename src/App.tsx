import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Projects } from "./components/projects/Projects";
import { Services } from "./components/services/Services";
import { Skills } from "./components/skills/Skills";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Footer />
    </>
  );
}

export default App;

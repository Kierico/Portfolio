import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { Header } from "./components/header/Header";
import { Projects } from "./components/projects/Projects";
import { Services } from "./components/services/Services";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Services />
    </>
  );
}

export default App;

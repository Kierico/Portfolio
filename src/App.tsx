import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { Header } from "./components/header/Header";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
    </>
  );
}

export default App;

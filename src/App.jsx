import React from "react";
import {
  Header,
  Nav,
  About,
  Projects,
  Techstack,
  Contact,
  Banner,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bggradient bg-cover overflow-hidden bg-no-repeat">
      <Header />
      <Nav />
      <Banner />
      <About />
      <Techstack />
      <Projects />
      <Contact />
      <Footer />
      {/* <div className="h-[2000px]"></div> */}
    </div>
  );
}

export default App;

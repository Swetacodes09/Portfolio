import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skill/skill";
import Project from "./components/Project/project";
import Social from "./components/Social/social";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Project/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;

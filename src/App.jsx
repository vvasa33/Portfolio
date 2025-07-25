import './App.css'
import Landing from './Components/Landing/Landing.jsx'
import SectionWrapper from "./Components/SectionWrapper.jsx";
import About from "./Components/About/About.jsx";

function App() {
  return (
      <div className="scroll-wrapper">
        <Landing />
          <About />
      </div>
  )
}

export default App
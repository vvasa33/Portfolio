import './App.css'
import Landing from './Components/Landing/Landing.jsx'
import SectionWrapper from "./Components/SectionWrapper.jsx";

function App() {
  return (
      <div className="scroll-wrapper">
        <Landing />
          <Landing />
          <Landing />
      </div>
  )
}

export default App
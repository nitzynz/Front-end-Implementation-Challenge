import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./navbar"; //navbar component
import About from "./about"; //about me component
import Skills from "./skills"; //skills component
import Interests from "./interests"; //interests component
import Contact from "./contact"; //contact component
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css"; //Transition styles

function App() {
  const location = useLocation(); //for active route during refresh

  return (
    <>
      <Navbar />
      <SwitchTransition>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          {/* Routes */}
          <Routes location={location}>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;

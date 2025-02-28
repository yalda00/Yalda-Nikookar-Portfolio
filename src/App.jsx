import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { useState } from "react"
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import ParticlesComponent from './components/config/ParticleBackground'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import Aikya from './components/sections/Project/Aikya'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ParticlesComponent />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <Router> 
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <Routes>
            <Route path="*" element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
              </>
            } />

            <Route path="/project/aikya" element={<Aikya />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

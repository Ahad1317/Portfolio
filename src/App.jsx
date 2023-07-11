import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
        </div>  
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
          <div className="relative z-0">
            <Contact/>
            <div>
            <a href="https://google.com/" className="border-2 border-secondary bg-white text-secondary py-2 px-4 rounded-lg mt-4" role="button">
              Resume
            </a>
          </div>
            <StarsCanvas/>
          </div>  
      </div>
    </BrowserRouter>
  )
}

export default App

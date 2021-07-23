import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
function App() {
  return (
    <div className="App">
     
      <Header/>
      <Router>
        <Route path="/about">
              <About/>
        </Route>
        
        <Route path="/contact">
              <Contact/>
        </Route>
        <Route path="/portfolio">
              <Portfolio/>
        </Route>
        <Route path="/Resume">
              <Resume/>
        </Route>
             
             </Router>
             <Footer/>
    </div>

  
  );
}

export default App;

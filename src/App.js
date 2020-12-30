import React from 'react';
import Fade from 'react-reveal';
import Container from 'react-bootstrap/Container';
import './App.css';
import { Parallax } from "react-parallax";
import Navbar from './components/navbar';
import Caraousel from './components/caraousel';
import Title from './components/Titlemessage';
import About from './pages/about';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    
    <div id="home"><Navbar/>
    <Caraousel/>
     <Title/>    
   <div>
     
   <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background_reverse.webp")}
          bgImageAlt="as"
          strength={-200}
        >
     <Container className="container-box rounded">
     <Fade duration={500}>
        <About/>
     </Fade>
     </Container >
     </Parallax>
   </div>
   
     <Container className="container-box rounded">
   
     <Skills/>
   
     </Container >
    
     <Container className="container-box rounded">
   
   <Contact/>
 
   </Container >
   
     </div>

  );
}

export default App;

import './App.css';
import Hero from './Hero/Hero';
import About from './About/About';
import ProjectContainer from './ProjectCards/ProjectContainer';
import Footer from './Footer/Footer';
// import Typewriter from './Hero/Typewriter';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <ProjectContainer/>
      <Footer/>
    </div>
  );
}

export default App;

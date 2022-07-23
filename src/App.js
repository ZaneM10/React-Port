import './App.css';
import Navigation from './screens/navigationBar/NavigationBar'
import ParticleAnimation from 'react-particle-animation'
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import ContactMe from './screens/contactMe/ContactMe';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <ParticleAnimation 
        style={{ height: '96vh'}}
        background={{ r: 21, g: 22, b: 23, a: 1 }}
        particleSpeed={0.2}
        particleRadius={0.7}
        color={{ r: 170, g: 97, b: 99, a: 255 }}
      />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;

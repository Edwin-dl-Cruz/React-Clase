
import './App.css';
import Navbar from './componentes/Nadvar';
import About from './componentes/About';
import Proyects from './componentes/Projects';
import Contact from './componentes/Contact';
import Cards from './componentes/Cards';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Proyects />
      <Contact />
      <Cards />
      <Contact />
      <Navbar />
    </div>
  );
}

export default App;

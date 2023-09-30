import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Gasprice from './components/Gasprice';
import Liquors from './components/Liquors';
import Contact from './components/Contact';

function App() {
  return (
    <main className="text-stone-800 bg-gray-300 body-font">
      <Navbar />
      <About />
      <Gasprice />
      <Liquors />
      <Contact />
    </main>
  );
}
export default App;

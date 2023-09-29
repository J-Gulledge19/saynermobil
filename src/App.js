import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Gasprice from './components/Gasprice';

function App() {
  return (
    <main className="text-stone-800 bg-gray-300 body-font">
      <Navbar />
      <About />
      <Gasprice />
    </main>
  );
}
export default App;

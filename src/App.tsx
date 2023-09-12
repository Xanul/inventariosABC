import './App.css';
import { Footer } from './components/Footer';
import { Inputs } from './components/Inputs';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Inputs />
      <Footer />
    </div>
  );
}

export default App;

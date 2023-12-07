import './App.css';
import Banner1 from './components/Banner/Banner';
import Navbar1 from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar1/>
      <Banner1/>
      <Slider/>
      </header>
    </div>
  );
}

export default App;

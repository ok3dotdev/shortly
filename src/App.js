import './App.css';
import Boost from './components/Boost';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Short from './components/Short';
import Statistics from './components/Statistics';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Short/>
      <Statistics/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;

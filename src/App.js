// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <section className="sec-1-3">
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
        </section>
        <section>

        </section>
      </header>
    </div>
  );
}

export default App;

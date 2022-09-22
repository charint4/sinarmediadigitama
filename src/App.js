// import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <section className="sec-1-3">
          <Section1 />
          <Section2 />
        </section>
        <section>

        </section>
      </header>
    </div>
  );
}

export default App;

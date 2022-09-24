// import logo from './logo.svg';
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/AboutUs" component={AboutUs} exact />
          <Route path="/Services" component={Services} exact />
          {/* <Route component={Error} /> */}
        </Switch>
        <Footer />
        {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

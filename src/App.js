// import logo from './logo.svg';
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Floatbtn from "./Components/Floatbtn";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/AboutUs" component={AboutUs} exact />
          <Route path="/Service/:title/:id" component={Services} exact />
          {/* <Route component={Error} /> */}
        </Switch>
        <Floatbtn />
        <Footer />

        {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import AboutUs from "./Pages/AboutUs";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/AboutUs" component={AboutUs} exact />
          {/* <Route component={Error} /> */}
        </Switch>
        {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog"
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Footer from "./Components/Footer";
import Floatbtn from "./Components/Floatbtn";
import { createContext, useState } from "react";
import langContext from "./Context/languageContext";
import SectionBlog from "./Components/DetailedBlog/SectionBlog";
import DetailedBlog from "./Pages/DetailedBlog";

function App() {
  const [lang, setLang] = useState("en");
  const value = { lang, setLang };

  return (
    <div className="App">
      <langContext.Provider value={value}>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/AboutUs" component={AboutUs} exact />
            <Route path="/Service/:title/:id" component={Services} exact />
            <Route path="/Blog" component={Blog} exact />
            <Route path="/Detailed-Blog/:title/:id" component={DetailedBlog} exact />

            {/* <Route component={Error} /> */}
          </Switch>
          <Floatbtn />
          <Footer />

          {/* <Home /> */}
        </BrowserRouter>
      </langContext.Provider>
    </div>
  );
}

export default App;

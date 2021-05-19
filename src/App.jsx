import React from "react";
import "./accessories/styles/pages.css";
import Header from "./pages/Header";
import TogglePic from "./pages/TogglePic";
import AboutMe from "./pages/AboutMe";
import MyContents from "./pages/MyContents";
import Recommend from "./pages/Recommend";
import MySkills from "./pages/MySkills";
import Footer from "./pages/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <TogglePic />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/MySkills" component={MySkills} />
        <Route path="/MyContents" component={MyContents} />
        <Route path="/Recommend" component={Recommend} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./layout/header";
import Home from "./controllers/Home";
import Surah from "./controllers/Surah";
import DetailSurah from "./controllers/DetailSurah";
import SearchSurah from "./controllers/SearchSurah";
import Bookmark from "./controllers/Bookmark";
import About from "./controllers/About";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/surah" component={Surah} />
          <Route path="/surah/:id" component={DetailSurah} />
          <Route path="/search" component={SearchSurah} />
          <Route path="/bookmark" component={Bookmark} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;

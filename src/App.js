import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PricingPage, MainPage, AlbumPage } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={MainPage} />
          <Route path="/prices" component={PricingPage} />
          <Route path="/album/:author_slug?" component={AlbumPage} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

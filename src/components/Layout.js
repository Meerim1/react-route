import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Header from "./Header.js";
import Footer from "./Footer.js";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>{this.props.children}</Container>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;

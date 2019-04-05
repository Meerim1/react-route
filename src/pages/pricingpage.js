import React, { Component } from "react";
import { Layout } from "../components";
import { Container } from "reactstrap";

class PricingPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Pricing</h1>
            <p class="lead">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default PricingPage;

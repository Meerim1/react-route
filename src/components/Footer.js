import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row ">
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="https://yarnpkg.com/en/package/reactstrap">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://yarnpkg.com/en/package/reactstrap">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://yarnpkg.com/en/package/reactstrap">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://yarnpkg.com/en/package/reactstrap">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://yarnpkg.com/en/package/reactstrap">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://yarnpkg.com/en/package/reactstrap">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="https://getbootstrap.com/docs/4.3/examples/album/">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://getbootstrap.com/docs/4.3/examples/album/">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://getbootstrap.com/docs/4.3/examples/album/">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://getbootstrap.com/docs/4.3/examples/album/">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="https://getbootstrap.com/docs/4.3/examples/album/">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://getbootstrap.com/docs/4.3/examples/album/">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://getbootstrap.com/docs/4.3/examples/album/">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="https://getbootstrap.com/docs/4.3/examples/album/">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

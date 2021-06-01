import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { ReactTypeformEmbed } from "react-typeform-embed";

export class HeroComponentV2 extends Component {
  render() {
    return (
      <div className="hero-container">
        {this.props.width <= 810 ? (
          <div className="asset-container">
            <h2>diffusion</h2>
          </div>
        ) : null}
        <div className="hero-copy">
          <h1>It Pays To Have Good Taste</h1>
          <div className="subheading-container">
            <h4>
              Join the space where creatives like you can share their favorite
              content while building and earning from an authentic community.
              Handle content overload by personalizing content in your niche as
              moodboards.
            </h4>
          </div>
          <div className="button-container">
            <Router>
              <Link
                style={{
                  backgroundColor: "#00b1d2",
                  border: "none",
                  borderRadius: "15px",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "bold",
                  outline: "none",
                  padding: "20px",
                  textDecoration: "none",
                }}
                to="/form"
              >
                Become a Curator
              </Link>
              <Switch>
                <Route path="/form">
                  <div style={{ zIndex: "10", backgroundColor: "red" }}>
                    <ReactTypeformEmbed url="https://hjv8msq3gnt.typeform.com/to/Gdq3kNQl" />
                  </div>
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
        {this.props.width >= 810 ? (
          <div className="asset-container">
            <h2>diffusion</h2>
          </div>
        ) : null}
      </div>
    );
  }
}

export default HeroComponentV2;

import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { ReactTypeformEmbed } from "react-typeform-embed";

export default class HeroComponent extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <h3>diffusion</h3>

          <h1 className="hero-text">
            A fun way to find new perspectives and build your brand.
          </h1>
          <h4 className="hero-text" style={{ paddingBottom: "50px" }}>
            Curate both your favorite web content and personal creations as
            pinboards to share.
          </h4>

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
              Join the waitlist
            </Link>
            <Switch>
              <Route path="/form">
                <ReactTypeformEmbed url="https://hjv8msq3gnt.typeform.com/to/Gdq3kNQl" />
              </Route>
            </Switch>
          </Router>
        </div>
        <img
          src={window.location.href + "favicon.ico"}
          alt="diffusion-logo-animated"
          className="logo-animated bounce"
        />
      </div>
    );
  }
}

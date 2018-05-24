import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer dark-background">
        <h4>{copyright}</h4>
        <UserLinks config={config} labeled />
      </footer>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import "./UserLinks.scss";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <a title={link.label} key={link.label} href={link.url}>
        <i className={link.iconClassName}></i>
      </a>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <span className="user-links">{this.getLinkElements()}</span>;
  }
}

export default UserLinks;

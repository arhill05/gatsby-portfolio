import React, { Component } from 'react';
import './PortfolioItem.scss';

class PortfolioItem extends Component {
  render() {
    const item = { ...this.props };
    return (
      <div className="portfolio-item">
        <div className="portfolio-item-info">
          <h3>{item.title}</h3>
        </div>
        <div className="portfolio-item-image">
          <img src={item.imageUrl} alt="" />
        </div>
      </div>
      // <div className="portfolio-item card">
      //   <div className="card-image">
      //     <img src={item.imageUrl} alt="Andrew Hill Profile" />
      //   </div>
      //   <div className="card-content">
      //     <h2>{item.title}</h2>
      //     <p>{item.description}</p>
      //   </div>
      // </div>
    );
  }
}

export default PortfolioItem;

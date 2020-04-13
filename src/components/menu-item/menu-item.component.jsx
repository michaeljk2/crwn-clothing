import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

// mit dem Export unten, gibt es jetzt access zum history objekt!
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}></div>
      <div className='content'>
        <div className='title'>{title}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

// Das Teil returned ein Super powered MenuItem
export default withRouter(MenuItem);

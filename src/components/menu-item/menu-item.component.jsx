import React from "react";
// prop tunneling:    ✋🏼
// react withRouter:  🤙🏼
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      // highjacking url with component page path appended
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// Higher Order Component - this provides access to props.match.history
export default withRouter(MenuItem);

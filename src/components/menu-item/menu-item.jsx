import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ size, linkUrl, imageUrl, title, subtitle }) => {
  const navigate = useNavigate();
  return <div className={`${ size } menu-item`} onClick={() => navigate(linkUrl)}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="background-image"
    ></div>
    <div className='content'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <span className='subtitle'>{ subtitle }</span>
      </div>
  </div>
}

export default MenuItem;
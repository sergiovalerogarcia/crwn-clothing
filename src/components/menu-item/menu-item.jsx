import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = (props) => {
  const navigate = useNavigate();
  return <div className={`${ props.size } menu-item`} onClick={() => navigate(props.linkUrl)}>
    <div
      style={{
        backgroundImage: `url(${props.imageUrl})`
      }}
      className="background-image"
    ></div>
    <div className='content'>
        <h1 className='title'>{ props.title.toUpperCase() }</h1>
        <span className='subtitle'>{ props.subtitle }</span>
      </div>
  </div>
}

export default MenuItem;
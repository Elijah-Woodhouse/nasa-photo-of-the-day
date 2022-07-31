import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./Photo.css";



const IsImg = props => {
  return (
    <div className="picture">
      <img src={props.src}/>
    </div>
  )
}


const IsVideo = props => {
  return (
    <div className="picture">
      <YouTube videoId={props.src}/>
    </div>
  )
}



const Photo = props => {
  const isImage = props.type;

  if (isImage === "video") {
    return <IsVideo />;
  }
  return <IsImg src={props.src}/>;
}

export default Photo;

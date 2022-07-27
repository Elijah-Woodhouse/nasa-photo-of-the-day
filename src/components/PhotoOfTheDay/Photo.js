import React from "react";
import YouTube from "react-youtube";



const IsImg = props => {
  return (
    <div className="picture">
      <img src={props.src} width="320" height="240"/>
    </div>
  )
}


const IsVideo = props => {
  return (

    <div className="picture">
      <YouTube videoId={props.src}/>
    </div>
  )
  //console.log(props.src.substr(30, 46));
}



const Photo = props => {

  //console.log(props.type);
  const isImage = props.type;


  if (isImage === "video") {
    return <IsVideo src={props.url} />;
  }
  return <IsImg src={props.url} />;


}

export default Photo;

import React from "react";
import MarsPhotos from "./Photo";
import './PhotoDBStyles.css'


const PhotoCard = props => {

  const { photos } = props;

  //console.log(photos[0]);

  return (
    <div className="card-container">
    {photos.map(photo => {
      return <MarsPhotos photo={photo} key={photo.id} />
    })}
    </div>
  );

}

export default PhotoCard;

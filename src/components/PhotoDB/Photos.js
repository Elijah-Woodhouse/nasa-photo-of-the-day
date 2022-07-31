import React from "react";
import MarsPhotos from "./Photo";


const PhotoCard = props => {

  const { photos } = props;

  //console.log(photos[0]);

  return (
    <div>
    {photos.map(photo => {
      return <MarsPhotos photo={photo} key={photo.id} />
    })}
    </div>
  );

}

export default PhotoCard;

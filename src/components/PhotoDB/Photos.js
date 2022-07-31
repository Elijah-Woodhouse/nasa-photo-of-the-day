import React from "react";
import MarsPhotos from "./Photo";


const PhotoCard = props => {

  const { photos } = props;

  //console.log(photos);

  return (
    <div>
    {photos.map(photo => {
      return <MarsPhotos photo={photo.img_src} />
    })}
    </div>
  );

}

export default PhotoCard;

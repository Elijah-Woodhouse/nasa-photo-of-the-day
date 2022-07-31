import React, { useEffect, useState } from "react";
import axios from "axios";




const MarsPhotos = props => {

  const { photo } = props;

  //console.log(photo.img_src);

  return (
    <div className='post-border'>
      <div className='post-image-wrapper'>
        <img
          alt='nasa picture'
          className='post-image'
          src={photo.img_src}
        />
      </div>
    </div>
  );
};

export default MarsPhotos;

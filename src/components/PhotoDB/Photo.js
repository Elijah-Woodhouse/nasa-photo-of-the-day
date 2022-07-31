import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import axios from "axios";




const MarsPhotos = props => {

  const { photo } = props;

  //console.log(photo.img_src);

  return (
    <div className="marsCard">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo.img_src} />
      <Card.Body>
        <Card.Title>{photo.rover.name}</Card.Title>
        <Card.Text>
          Landing Date: {photo.rover.landing_date}
          Date Photo Was Taken: {photo.earth_date}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default MarsPhotos;

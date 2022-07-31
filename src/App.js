import axios from "axios";
import React, { useState, useEffect } from "react";
import Photos from "./components/PhotoOfTheDay/Photo.css"
import Photo from "./components/PhotoOfTheDay/Photo"
import Header from "./components/Header/Header.js"
import PhotoCard from "./components/PhotoDB/Photos"
import PhotoData from "./components/PhotoDB/Photo"
import "./App.css";

const apiKey = "AbmmzjW5evKrln9xUWBOxySnraDDYfq47pv3xj85";



const App = () => {

    const [ data, setData ] = useState([]);
    const [ date, setDate ] = useState(data.date);
    const [ photos, setPhotos ] = useState([]);






    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res =>{
        const data = res.data;
        //console.log(data);
        return setData(data);
      })
      .catch(err =>{
        console.error(err)
      })
      return () => {
      }
    }, [])



    useEffect(() => {
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${apiKey}`)
        .then(res =>{
          const photoData = res.data.photos;
          //console.log(res.data);
          setPhotos(photoData);
          console.log(photoData[0].img_src);
          return photoData;
        })
        .catch(err =>{
          console.log(err)
        })
    }, [])



  return (
    <div className="App">
      <Header date={data.date}/>
      <h2>{data.title}</h2>
      <h2>{data.date}</h2>
      <Photo className="ImageStyles" type={data.media_type} src={data.url} />
      <PhotoData photo={photos} />
    </div>
  );
}

export default App;

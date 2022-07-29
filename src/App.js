import axios from "axios";
import React, { useState, useEffect } from "react";
import Photos from "./components/PhotoOfTheDay/Photos"
import Photo from "./components/PhotoOfTheDay/Photo"
import Header from "./components/Header/Header.js"
import "./App.css";

import { apiKey } from "./index";



function App() {



    const [ data, setData ] = useState([]);
    const [ date, setDate ] = useState(data.date);

    //console.log(data);





    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res =>{
        const data = res.data;
        return setData(data);
      })
      .catch(err =>{
        console.error(err)
      })
      return () => {
      }
    }, [])


  return (
    <div className="App">
      <Header date={data.date}/>
      <h1>Today's Photo of the Day from Nasa: </h1>
      <h2>{data.title}</h2>
      <h2>{data.date}</h2>
      <Photo type={data.media_type} src={data.url} />
    </div>
  );
}

export default App;

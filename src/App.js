import axios from "axios";
import React, { useState, useEffect } from "react";
import Photos from "./components/PhotoOfTheDay/Photos"
import Photo from "./components/PhotoOfTheDay/Photo"
import Header from "./components/Header/Header.js"
import "./App.css";

const apiKey = "AbmmzjW5evKrln9xUWBOxySnraDDYfq47pv3xj85";



function App() {

    const [ details, setDetails ] = useState([]);



    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res =>{
        console.log(res.data);
        return setDetails(res.data);
      })
      .catch(err =>{
        console.error(err)
      })
      return () => {
        console.log("cleaned up YW")
      }
    }, [])


  return (
    <div className="App">
      <Header date={details.date}/>
      <h1>Today's Photo of the Day from Nasa: </h1>
      <h2>{details.title}</h2>
      <h2>{details.date}</h2>
      <Photo type={details.media_type} src={details.url} />
    </div>
  );
}

export default App;

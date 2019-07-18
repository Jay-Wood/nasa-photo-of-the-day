import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgCard from "./imgCard.js";
import styled from "styled-components";

export default function ImgContainer() {
  const [photoObj, setPhotoObj] = useState({})

  useEffect( () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=pe1nx4Aolg4EtkBvJ8ZwQRAqnI7M8eE7obEJubog`)
      .then(response => {
        const photoObj = response.data
        setPhotoObj(photoObj)
      });
    }, []);
    console.log("Data from API", photoObj)
    
    return (
      <div className="img">
        <ImgCard imgURL={photoObj.url}
                 imgTitle={photoObj.title} 
                 imgCopyright={photoObj.copyright}
                 imgDate={photoObj.date}
                 imgExplanation={photoObj.explanation}
        />
      </div>
    )  
}




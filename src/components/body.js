import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgCard from "./imgCard.js";


export default function ImgContainer() {

  const [imgURL, setImgURL] = useState([])
  const [imgTitle, setImgTitle] = useState([])
  const [imgCopyright, setimgCopyright] = useState([])
  // const [photoObject, setPhotoObj] = useState({})

  useEffect( () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=pe1nx4Aolg4EtkBvJ8ZwQRAqnI7M8eE7obEJubog&date=2012-03-14`)
      .then(response => {
        //const photoObject = response.data
        //setphotoObj(response.data)
        const urlFromNasa = response.data.url
        const titleFromNasa = response.data.title
        const imgCopyright = response.data.copyright
        console.log("data from NASA (response.data):", response.data)
        setImgURL(urlFromNasa)
        setImgTitle(titleFromNasa)
        setimgCopyright(imgCopyright)
      })
    }, [])

    return (
      //props from photoObject here? 
      <div className="img">
        <ImgCard imgURL={imgURL} imgTitle={imgTitle} imgCopyright={imgCopyright}/>
      </div>

    )  
}




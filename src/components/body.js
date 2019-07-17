import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgCard from "./imgCard.js";


export default function ImgContainer() {

  const [imgURL, setImgURL] = useState([])

    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=pe1nx4Aolg4EtkBvJ8ZwQRAqnI7M8eE7obEJubog&date=2012-03-14`)
    .then(response => {
      const urlFromNasa = response
      console.log("data from NASA (response.data.url):", response.data.url)
      console.log(imgURL)
    })

    return (
      <div className="img">
        <ImgCard imgURL={imgURL} />
      </div>
    )  
}




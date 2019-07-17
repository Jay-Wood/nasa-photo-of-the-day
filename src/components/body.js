import React, { useEffect, useState } from "react";
import axios from "axios";

const Body =
// useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
      .then(response => {
        console.log("data from NASA:", response)
      })
    //   .catch(response => {
    //       console.log("some error", response)
    //   });
//   }, []);


export default Body

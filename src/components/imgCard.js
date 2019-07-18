import React, { useEffect, useState } from "react";
import styled from "styled-components";


export default function ImgCard(props) {

  return (
    <div className="img-card">
      <h2>Image Title: {props.imgTitle} </h2>
      <img src={props.imgURL} alt = "NASA photo" />
      <h4>Copyright: {props.imgCopyright} </h4>
    </div>
    )
}


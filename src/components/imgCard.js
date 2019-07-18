import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 80%;
  border: 2px solid red;
  margin: 0 auto;
`;

const ImgHeader = styled.div`
  color: blue;
  display: flex;
  flex-direction: column;
  justify-content: space around;
  align-items: center;
`;

const ImgHeaderH2 = styled.h2`
  font-size: 2.5vw;
  font-style: italic;
  height: 10vh;
  margin: 0;
`;

const ImgDate = styled.p`
  `;

const ImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
`;

const ImgExplanation = styled.p`
  color: darkgray;
  padding: .5vw;
  width: 60%;
  text-align left;
`;

const ImgCard = function (props) {
  return (
    <CardWrapper>
      <ImgHeader>
        <ImgHeaderH2> {props.imgTitle} </ImgHeaderH2>
        <p>Photo featured on: {props.imgDate} </p>
        <h4>Copyright: {props.imgCopyright} </h4>
      </ImgHeader>  
      <ImgContainer>
        <img src={props.imgURL} alt = "NASA photo" /> 
      </ImgContainer>
      <ImgExplanation> {props.imgExplanation}</ImgExplanation>
    </CardWrapper>
    )
}

export default ImgCard
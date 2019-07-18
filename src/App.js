import React from "react";
import axios from "axios";
import "./App.css";
import Body from "./components/body.js";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 95%;
  border: 2px solid gray;
  margin: 0 auto;
`;

const BodyWrapper = styled.div`
  font-family: monospace;
  background-color: whitesmoke;
`;

const TitleH1 = styled.h1`
  font-family: monospace;
  font-size: 3vw;
`;

const HeaderDiv = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ; 
`;


function App() {
  return (
    <AppWrapper>

      <HeaderDiv className="Title">
        <TitleH1>NASA Photo of the Day</TitleH1>
      </HeaderDiv>
      
      <BodyWrapper>
        <Body />
      </BodyWrapper>
    
    </AppWrapper>
  );
}

export default App;

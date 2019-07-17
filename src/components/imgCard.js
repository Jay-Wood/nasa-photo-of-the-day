import React from "react";

export default function ImgCard(props) {
    return (
      <div className="img-card">
        <img src={props.imgURL} alt="text" style={{ maxWidth: "275px" }} />
        <h3>Image Title: {props.imgTitle} </h3>
        <h4>Copyright: {props.imgCopyright} </h4>
      </div>
    );
}


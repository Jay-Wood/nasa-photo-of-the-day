import React from "react";

export default function ImgCard({ imgURL, imgTitle, imgCopyright }) {
    return (
      <div className="img-card">
        <img src={imgURL} alt="text" style={{ maxWidth: "275px" }} />
        <h3>Image Title: {imgTitle} </h3>
        <h4>Copyright: {imgCopyright} </h4>
      </div>
    );
}


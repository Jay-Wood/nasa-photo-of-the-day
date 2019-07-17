import React from "react";

export default function ImgCard({ imgURL }) {
    return (
      <div className="img-card">
        <img src={imgURL} alt="text" style={{ maxWidth: "275px" }} />
      </div>
    );
}


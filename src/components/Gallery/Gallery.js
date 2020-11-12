import React from "react";
import "./Gallery.css";
import clips from "../../content/clips";
import GaleryItem from "../GaleryItem/GaleryItem";
const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Galerie</h1>
      <div className="gallery-content">
        {clips.map((item, index) => {
          return <GaleryItem src={item} key={index} title={index} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;

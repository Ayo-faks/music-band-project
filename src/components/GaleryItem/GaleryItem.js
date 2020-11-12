import React from "react";

const GaleryItem = (props) => {
  return (
    <div className="item">
      <iframe
        title={props.title}
        src={props.src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default GaleryItem;

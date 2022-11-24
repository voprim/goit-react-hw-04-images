import React from "react";
import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

export function ImageGalleryItem({ webformatURL, largeImageURL, tags, handleLargeURLImage }) {
  
  const handleClick = (e) => {
    if (e.target.nodeName === "IMG") {
      largeImageURL = e.target.dataset.large;
      handleLargeURLImage(e.target.dataset.large);
    }
  };
  
  return (
      <li
        className={css.ImageGalleryItem}
        key={webformatURL}
        onClick={handleClick}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
          onClick={handleClick}
          data-large={largeImageURL}
        />
      </li>
    );
}

ImageGalleryItem.propTypes = {
  handleLargeURLImage: PropTypes.func.isRequired,
  //handleClick: PropTypes.func.isRequired,
};

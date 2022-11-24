import React from "react";
import PropTypes from 'prop-types';
import css from "./ImageGallery.module.css";
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem";

export function ImageGallery({ images, handleLargeURLImage }) {
  const handleClick = (e) => {
    console.log("gallery click");
  };
  
  const handleLargeURLImages = (data) => {
    handleLargeURLImage(data);
  };
  
  return (
      <ul className={css.ImageGallery} id="imagesList">
        {images.map(({ id, webformatURL, largeImageURL, tags, user }) => (
          <ImageGalleryItem
            onClick={handleClick}
            key={`${id}${user}`}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tag={tags}
            handleLargeURLImage={handleLargeURLImages}
          />
        ))}
      </ul>
    );
}

ImageGallery.propTypes = {
  handleLargeURLImage: PropTypes.func.isRequired,
};
